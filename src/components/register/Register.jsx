import React, { useState } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Typography, Container } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { setUserId } from "../../Common";

import useStyles from "./RegisterStyles";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUserDetails] = useState([]);
  const [error, setError] = useState(null);

  const classes = useStyles();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/users/register", {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        birthDate: birthDate,
        phoneNumber: phoneNumber,
        email: email,
        address: address,
      })
      .then((response) => {
        console.log(response);
        setUserDetails(response.data);
        setUserId(response.data.userId);
        navigate("/account-portal");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400)
          setError("Some details are missing or incorrect!");
        else setError("Invalid credentials - Email or Password is incorrect");
      });
  };

  function validateForm() {
    return (
      userName.length > 0 &&
      email.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      password.length > 0
    );
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <Container maxWidth="lg" className={classes.Container}>
        <Typography variant="h5" className={classes.PageHeader} component="h2">
          Create New Account
        </Typography>
        <br />
        <Typography className={classes.PageHeader} color="inherit">
          Create an account so you can track your orders and checkout faster
        </Typography>
        <Form className={classes.Form} onSubmit={handleRegistration}>
          <FormGroup controlId="formFirstName">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">First Name</Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="text"
              defaultValue={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formLastName">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">Last Name</Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="text"
              defaultValue={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formUserName">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">Username</Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="text"
              defaultValue={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formPassword">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">Password</Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="password"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formBirthDate">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">Birthday </Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="date"
              defaultValue={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formPhoneNumber">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">Phone Number</Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="text"
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formEmail">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">Email</Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="text"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formAddress">
            <FormLabel className={classes.FormLabel}>
              <Typography component="h2">Address</Typography>
            </FormLabel>
            <input
              className={classes.FormText}
              type="text"
              defaultValue={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
          {error && (
            <>
              <small>{error}</small>
              <br />
            </>
          )}
          <br />
          <Button
            variant="button"
            type="submit"
            disabled={!validateForm()}
            className={classes.RegisterButton}
            onClick={handleRegistration}
          >
            <Typography>Create Account</Typography>
          </Button>
        </Form>
        <br />
      </Container>
    </div>
  );
};

export default Register;
