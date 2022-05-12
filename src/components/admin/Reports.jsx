import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ordersIcon from "../../assets/orders-icon.png";
import userIcon from "../../assets/user-icon.png";

import useStyles from "./AdminPortalStyles";

const Reports = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <ImageList variant="standard" gap={200} cols={2} rowHeight={200}>
        <ImageListItem>
          <NavLink to="/admin/reports/orders">
            <img
              className={classes.img}
              src={ordersIcon}
              alt="orders.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Order Reports"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <NavLink to="/admin/reports/users">
            <img
              className={classes.img}
              src={userIcon}
              alt="user.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="User Reports"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default Reports;
