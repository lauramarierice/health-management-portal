import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-ui/core";
import useStyles from "./CartStyles";
import CartItem from "./cart_items/CartItem";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserId } from "../../Common";

const Cart = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [cart, setCart] = useState([]);

  const fetchUser = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);
  };

  const fetchUserCartDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);

    axios
      .get("http://localhost:9000/users/" + userId + "/carts")
      .then((response) => {
        console.log(response);
        setCart(response.data);
        console.log(response.data);
        console.log(cart.cartItems.length);
      });
  };

  const handleEmptyCart = async () => {
    axios
      .delete("http://localhost:9000/users/" + userId + "/carts", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
        setCart(response.data);
        fetchUserCartDetails();
        console.log(response.data);
      });
  };

  const handleCheckout = () => {
    navigate("/cart/checkout");
  };

  const handleIncreaseCartItemQuantity = async (medicineid) => {
    axios
      .put(
        "http://localhost:9000/users/" + userId + "/increase/carts-items",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
        {
          params: {
            medicineid: medicineid,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setCart(response.data);
        fetchUserCartDetails();
        console.log(response.data);
      });
  };

  const handleDecreaseCartItemQuantity = async (medicineid) => {
    axios
      .put(
        "http://localhost:9000/users/" + userId + "/decrease/carts-items",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
        {
          params: {
            medicineid: medicineid,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setCart(response.data);
        fetchUserCartDetails();
        console.log(response.data);
      });
  };

  const handleRemoveFromCart = async (medicineid) => {
    axios
      .delete("http://localhost:9000/users/" + userId + "/cart-items", {
        params: {
          medicineid: medicineid,
        },
      })
      .then((response) => {
        console.log(response);
        setCart(response.data);
        fetchUserCartDetails();
        console.log(response.data);
      });
  };

  const EmptyCart = () => (
    <>
      <Typography variant="subtitle1">
        <br />
        You have no items in your shopping cart
        <br />
        <Link to="/products" className={classes.link}>
          Search products
        </Link>
      </Typography>
    </>
  );

  const FilledCart = () => (
    <>
      <List>
        {cart.cartItems.map((item) => (
          <ListItem key={item.medicineId}>
            <CartItem
              item={item}
              userId={userId}
              onIncreaseCartQuantity={handleIncreaseCartItemQuantity}
              onDecreaseCartQuantity={handleDecreaseCartItemQuantity}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </ListItem>
        ))}
      </List>
      <div className={classes.cardDetails}>
        <Typography variant="h6">Subtotal: ${cart.cartCost}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="small"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="small"
            type="button"
            variant="contained"
            color="primary"
            onClick={() => handleCheckout()}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  useEffect(() => {
    fetchUserCartDetails();
    fetchUser();
  }, []);

  if (!cart.cartItems) return "Loading...";

  return (
    <Container className={classes.Container} maxWidth="lg">
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.cartItems.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
