import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./CartItemStyles";

const CartItem = ({
  item,
  userId,
  onIncreaseCartQuantity,
  onDecreaseCartQuantity,
  onRemoveFromCart,
}) => {
  const classes = useStyles();
  const handleIncreaseCartQuantity = (userId, lineItemId) =>
    onIncreaseCartQuantity(userId, lineItemId);
  const handleDecreaseCartQuantity = (userId, lineItemId) =>
    onDecreaseCartQuantity(userId, lineItemId);
  const handleRemoveFromCart = (userId, lineItemId) =>
    onRemoveFromCart(userId, lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia alt={item.medicineName} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.medicineName}</Typography>
        <Typography variant="h5">${item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleDecreaseCartQuantity(item.medicineId)}
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleIncreaseCartQuantity(item.medicineId)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          size="small"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.medicineId)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
