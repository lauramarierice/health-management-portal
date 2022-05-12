import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import inventoryIcon from "../../assets/inventory-icon.png";
import reportIcon from "../../assets/reports.png";

import useStyles from "./AdminPortalStyles";

const AdminPortal = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <ImageList variant="standard" gap={200} cols={2} rowHeight={200}>
        <ImageListItem>
          <NavLink to="/admin/inventory">
            <img
              className={classes.img}
              src={inventoryIcon}
              alt="inventory.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Inventory"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <NavLink to="/admin/reports">
            <img
              className={classes.img}
              src={reportIcon}
              alt="report.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar title="Reports" position="below"></ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default AdminPortal;
