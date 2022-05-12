import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserId } from "../../Common";
import useStyles from "./UserAccountStyles";
import { Grid, Header, Form, Button, Segment } from "semantic-ui-react";

const UserAccount = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState("");
  const [user, setUserDetails] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const fetchUserDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);

    axios.get("http://localhost:9000/users/" + userId).then((response) => {
      console.log(response);
      console.log(response.data);
      setUserDetails(response.data);
    });
  };

  const updateUserDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);

    axios
      .put("http://localhost:9000/users/" + userId, {
        password: password,
        phoneNumber: phoneNumber,
        email: email,
        address: address,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setSuccess(true);
        setUserDetails(response.data);
      })
      .catch((error) => {
        if (error.response.status === 400) setError(error.response.data);
        else {
          setError(true);
        }
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div>
      <Segment color="blue" className={classes.segment}>
        <Grid padded>
          <Grid.Column>
            <Header as="h1">Account Information</Header>
            <p>Please update your details.</p>

            <Form className={classes.Form} onSubmit={updateUserDetails}>
              <Form.Group>
                <Form.Input
                  label="Username"
                  value={user.userName}
                  width={10}
                  disabled
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="first_name"
                  value={user.firstName}
                  label="First Name"
                  placeholder="First Name"
                  width={6}
                  disabled
                />
                <Form.Input
                  name="last_name"
                  value={user.lastName}
                  label="Last Name"
                  placeholder="Last Name"
                  width={4}
                  disabled
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="password"
                  type="password"
                  label="Password"
                  placeholder={user.password}
                  width={6}
                  onChange={(e) => setPassword(e.target.value)}
                  error={false}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="birthdate"
                  value={user.birthDate}
                  label="Birthday"
                  placeholder="02/02/2002"
                  width={4}
                  disabled
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="phone_number"
                  label="Mobile number"
                  placeholder={user.phoneNumber}
                  width={6}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={false}
                />
                <Form.Input
                  name="email"
                  type="email"
                  label="Email"
                  defaultValue={user.email}
                  placeholder={user.email}
                  width={10}
                  onChange={(e) => setEmail(e.target.value)}
                  error={false}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="address"
                  label="Address"
                  defaultValue={user.address}
                  placeholder={user.address}
                  width={16}
                  onChange={(e) => setAddress(e.target.value)}
                  error={false}
                />
              </Form.Group>

              {success && (
                <>
                  <small>Account Details have been updated.</small>
                  <br />
                </>
              )}
              {error && (
                <>
                  <small className={classes.error}>
                    Something Went Wrong <br />
                    One of the fields has error. Please review the form to see
                    where the error is.
                  </small>
                  <br />
                </>
              )}
              <br />
              <Button
                className={classes.UpdateButton}
                type="submit"
                onClick={updateUserDetails}
              >
                Update
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default UserAccount;
