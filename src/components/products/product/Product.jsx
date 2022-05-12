import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import ProductView from "./ProductView";
import { NavLink } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { setSelectedProduct } from "../../../Common";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [medicineId, setMedicineId] = useState("");
  const handleAddToCart = () => onAddToCart(product.medicineId, 1);

  const handleCurrentProduct = () => {
    setMedicineId(product.medicineId);
    setSelectedProduct(product.medicineId);
    console.log(product.medicineId);
  };

  useEffect(() => {
    handleCurrentProduct();
  }, []);

  return (
    <Card className={classes.root}>
      <NavLink
        to="/product"
        component={<ProductView medicineId />}
        onClick={handleCurrentProduct}
      >
        <CardMedia className={classes.media} image={product.imageUrl} />
      </NavLink>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
