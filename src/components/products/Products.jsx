import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./product/Product";
import useStyles from "./ProductsStyles";
import axios from "axios";
import { getUserId } from "../../Common";

const Products = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState("");
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchUserDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:9000/medicine/all");
    const result = await response.json();
    setProducts(result);
  };

  const handleAddToCart = async (medicineid, quantity) => {
    axios
      .put(
        "http://localhost:9000/users/" + userId + "/carts-items",
        { headers: { "Access-Control-Allow-Origin": "*" } },
        {
          params: {
            medicineid: medicineid,
            quantity: quantity,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setCart(response.data);
        console.log(response.data);
        fetchUserDetails();
      });
  };

  useEffect(() => {
    fetchUserDetails();
    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product
              product={product}
              userId={userId}
              onAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
