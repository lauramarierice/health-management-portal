import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { setUserSession, setUserId } from "../../Common";
import { useNavigate } from "react-router-dom";
import adminIcon from "../../assets/admin-icon.png";

import useStyles from "./LoginStyles";

const AdminLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .get("http://localhost:9000/users/login", {
        params: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        setLoading(false);
        console.log(response.data.userId);
        setUserId(response.data.userId);
        setUserSession(response.data);
        navigate("/admin-portal");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 400)
          setError(error.response.data.message);
        else setError("Invalid credentials - Email or Password is incorrect");
      });
  };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <div className={classes.body}>
      <br />
      <img
        className={classes.img}
        src={adminIcon}
        alt="admin.js"
        height="100px"
      />
      <div className={classes.Form}>
        Username <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className={classes.Form}>
        Password <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && (
        <>
          <small className={classes.loginError}>{error}</small>
          <br />
        </>
      )}
      <br />
      <Button
        className={classes.loginButton}
        type="submit"
        value={loading ? "Loading..." : "Login"}
        disabled={!validateForm()}
        onClick={handleLogin}
      >
        Login
      </Button>
      <br />
      <br />
    </div>
  );
};

export default AdminLogin;
