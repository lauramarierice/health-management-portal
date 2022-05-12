import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import addIcon from "../../assets/add-icon.jpg";
import editIcon from "../../assets/edit-icon.jpg";

import useStyles from "./AdminPortalStyles";

const Inventory = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <ImageList variant="standard" gap={15} cols={2} rowHeight={200}>
        <ImageListItem>
          <NavLink to="/admin/add-medicine">
            <img
              className={classes.img}
              src={addIcon}
              alt="addMedicine.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Add Medicine"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <NavLink to="/admin/update-products">
            <img
              className={classes.img}
              src={editIcon}
              alt="updateMedicine.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Update Medicine"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default Inventory;
