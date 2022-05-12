import React, { useState, useEffect } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import editProfileIcon from "../../assets/edit-profile-icon.png";
import fundsIcon from "../../assets/funds.png";
import orderIcon from "../../assets/orders-icon.png";
import logoutIcon from "../../assets/logout-icon.png";
import { Header } from "semantic-ui-react";
import { getUserId } from "../../Common";
import axios from "axios";

import useStyles from "./UserAccountStyles";

const AccountPortal = () => {
  const classes = useStyles();

  const [user, setUserDetails] = useState([]);

  const fetchUserDetails = () => {
    let userId = getUserId();
    console.log(userId);

    axios.get("http://localhost:9000/users/" + userId).then((response) => {
      console.log(response);
      console.log(response.data);
      setUserDetails(response.data);
    });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className={classes.body}>
      <Header as="h1">
        Welcome {user.firstName}! <br />
      </Header>
      <br />
      <br />
      <ImageList variant="standard" gap={200} cols={2} rowHeight={200}>
        <ImageListItem>
          <NavLink to="/user-account">
            <img
              className={classes.img}
              src={editProfileIcon}
              alt="edit.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Edit Account Profile"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <NavLink to="/users/order-status">
            <img
              className={classes.img}
              src={orderIcon}
              alt="order.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Check Order Status"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <NavLink to="/user-funds">
            <img
              className={classes.img}
              src={fundsIcon}
              alt="funds.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Add funds to account"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <NavLink to="/logout">
            <img
              className={classes.img}
              src={logoutIcon}
              alt="logout.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar title="Logout" position="below"></ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default AccountPortal;
