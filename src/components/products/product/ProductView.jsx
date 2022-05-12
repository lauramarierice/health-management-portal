import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import axios from "axios";
import { getSelectedProduct, getUserId } from "../../../Common";

import useStyles from "./styles";

const ProductView = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    let medicineId = getSelectedProduct();

    axios
      .get("http://localhost:9000/medicine/" + medicineId)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
        console.log(response.data);
      });
  };

  const handleAddToCart = async () => {
    let userId = getUserId();
    let medicineId = getSelectedProduct();

    axios
      .put(
        "http://localhost:9000/users/" + userId + "/carts-items",
        { headers: { "Access-Control-Allow-Origin": "*" } },
        {
          params: {
            medicineid: medicineId,
            quantity: 1,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setAddedToCart(true);
      });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <Card className={classes.productRoot}>
        <CardMedia className={classes.productMedia} image={product.imageUrl} />
        <CardContent>
          <div className={classes.productContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price}
            </Typography>
            <br />
            <p>
              <br />
              <Typography variant="h6" component="h2">
                {product.description}
              </Typography>
            </p>
            {addedToCart && (
              <>
                <small className={classes.addedToCartMessage}>
                  Added to cart!
                </small>
              </>
            )}
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.productCardActions}>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductView;
