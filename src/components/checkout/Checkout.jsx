import React, { useState, useEffect } from "react";
import { getUserId } from "../../Common";
import useStyles from "./CheckoutStyles";
import { Header, Form, Button, Segment } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [userAccountDetails, setUserAccountDetails] = useState([]);

  const fetchUserDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);
  };

  const fetchUserAccountDetails = () => {
    let userId = getUserId();
    axios
      .get("http://localhost:9000/users/" + userId + "/accounts")
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setUserAccountDetails(response.data);
      });
  };

  const handleProcessOrder = () => {
    axios
      .post(
        "http://localhost:9000/users/" + userId + "/orders",
        { headers: { "Access-Control-Allow-Origin": "*" } },
        {
          params: {
            accountid: userAccountDetails.accountNumber,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        navigate("/checkout/order-success");
      })
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    fetchUserDetails();
    fetchUserAccountDetails();
  }, []);

  return (
    <div>
      <Segment color="blue" className={classes.segment}>
        <Header as="h4">Customer Information</Header>
        <Form className={classes.Form} onSubmit={handleProcessOrder}>
          <Form.Group className={classes.FormGroup}>
            <Row>
              <Col>
                <Form.Input
                  name="first_name"
                  label="First Name"
                  placeholder="First Name"
                  width={6}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Input
                  name="last_name"
                  label="Last Name"
                  placeholder="Last Name"
                  width={4}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Input
                  name="email"
                  label="Email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  width={10}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className={classes.FormGroup}>
            <Row>
              <Col>
                <Form.Input
                  name="Address"
                  label="Street Address"
                  placeholder="1234 Address St"
                  width={20}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className={classes.FormGroup}>
            <Row>
              <Col>
                <Form.Input
                  name="City"
                  label="City"
                  placeholder="Austin"
                  width={6}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Input
                  name="state"
                  label="State"
                  placeholder="Texas"
                  width={4}
                  onChange={(e) => setState(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Input
                  name="zip_code"
                  label="Zip Code"
                  placeholder="00000"
                  width={4}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <br />
          <Header as="h4">Payment Information</Header>
          <Form.Group className={classes.FormGroup}>
            <Row>
              <Col>
                <Form.Input
                  name="account_balance"
                  label="Account Balance"
                  placeholder="$0.00"
                  value={"$" + userAccountDetails.balance}
                  width={10}
                />
              </Col>
              <Col>
                <Form.Input
                  name="account_number"
                  label="Account Number"
                  placeholder="1000689856665"
                  value={userAccountDetails.accountNumber}
                  width={10}
                />
              </Col>
            </Row>
          </Form.Group>
          {error && (
            <>
              <small className={classes.error}>
                Not enough funds to place order!
              </small>
              <br />
            </>
          )}
          <br />
          <Button
            className={classes.UpdateButton}
            type="submit"
            onClick={handleProcessOrder}
          >
            Submit Order
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default Checkout;
