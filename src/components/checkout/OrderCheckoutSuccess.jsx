import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserId } from "../../Common";
import useStyles from "./CheckoutStyles";
import { Grid, Header, Segment } from "semantic-ui-react";

const OrderCheckoutSuccess = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState("");
  const [userAccountDetails, setUserAccountDetails] = useState([]);

  const fetchUserDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);
  };

  const fetchUserAccountDetails = () => {
    let userId = getUserId();
    axios.get("http://localhost:9000/users/" + userId).then((response) => {
      console.log(response);
      console.log(response.data);
      setUserAccountDetails(response.data);
    });
  };

  useEffect(() => {
    fetchUserDetails();
    fetchUserAccountDetails();
  }, []);

  return (
    <div>
      <Segment color="blue" className={classes.segment}>
        <Grid padded>
          <Grid.Column>
            <Header as="h1" color="green">
              Order Successful!
            </Header>
            <p>
              An email will be sent to {userAccountDetails.email} with the order
              details.{" "}
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default OrderCheckoutSuccess;
