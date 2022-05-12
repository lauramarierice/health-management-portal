import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/user-icon.png";
import adminIcon from "../../assets/admin-icon.png";
import useStyles from "./LoginStyles";

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.imageBody}>
      <ImageList variant="standard" gap={15} cols={2} rowHeight={200}>
        <ImageListItem>
          <NavLink to="/user-login">
            <img
              className={classes.img}
              src={userIcon}
              alt="user.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="User Login"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <NavLink to="/admin-login">
            <img
              className={classes.img}
              src={adminIcon}
              alt="admin.js"
              height="100px"
            />
          </NavLink>
          <ImageListItemBar
            title="Admin Login"
            position="below"
          ></ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default Login;
