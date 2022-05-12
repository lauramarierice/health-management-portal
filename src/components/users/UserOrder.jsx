import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./UserAccountStyles";

const UserOrder = ({ order, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} title={order.orderId} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {order.orderId}{" "}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {order.orderDate}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {order.orderStatus}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserOrder;
