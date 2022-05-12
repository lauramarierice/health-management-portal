import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./UserAccountStyles";
import axios from "axios";
import { getUserId } from "../../Common";

const UserFunds = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [addFunds, setAddFunds] = useState(false);
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const fetchUserDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);
  };

  const fetchUserAccounts = async () => {
    let userId = getUserId();

    axios
      .get("http://localhost:9000/users/" + userId + "/accounts")
      .then((response) => {
        console.log(response);
        setAccounts(response.data);
        console.log(response.data);
      });
  };

  const updateAddFunds = () => {
    setAddFunds(true);
  };

  const handleAddFundsToAccount = async () => {
    let userId = getUserId();

    axios
      .put(
        "http://localhost:9000/users/" + userId + "/accounts/" + accountNumber,
        { headers: { "Access-Control-Allow-Origin": "*" } },
        {
          params: {
            funds: amount,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setAccounts(response.data);
        console.log(response.data);
        fetchUserAccounts();
      });
  };

  useEffect(() => {
    fetchUserDetails();
    fetchUserAccounts();
  }, []);

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} title={accounts.accountNumber} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Account Number: {accounts.accountNumber}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Account Balance: ${accounts.balance}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Button className={classes.Button} onClick={updateAddFunds}>
        Add Funds
      </Button>
      {addFunds && (
        <>
          <br />
          <div className={classes.addFundsForm}>
            <div className={classes.Form}>
              <Typography variant="h6" component="h5">
                Account Number:
              </Typography>{" "}
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className={classes.Form}>
              <Typography variant="h6" component="h5">
                Amount to add: <br />{" "}
              </Typography>
              <input
                type="double"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <br />
              <br />
              <Button
                className={classes.Button}
                onClick={handleAddFundsToAccount}
              >
                Add
              </Button>
            </div>
          </div>
          <br />
        </>
      )}
      <br />
    </div>
  );
};

export default UserFunds;
