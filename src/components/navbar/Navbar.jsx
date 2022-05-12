import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import logo from "../../assets/ehealth-logo.jpg";
import useStyles from "./NavbarStyles";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/products"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="eHealth.js"
              height="25px"
              className={classes.image}
            />
            eHealth
          </Typography>
          <div className={classes.grow} />
          {
            (location.path = "/" && (
              <div className={classes.button}>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="show cart items"
                  color="inherit"
                >
                  <Badge>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="user account info"
                  color="inherit"
                  component={Link}
                  to="/account-portal"
                >
                  <Badge color="secondary">
                    <AccountCircle />
                  </Badge>
                </IconButton>
              </div>
            ))
          }
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
