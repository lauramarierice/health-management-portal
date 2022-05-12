import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./AdminPortalStyles";

const UserReports = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState("");
  const [user, setUserDetails] = useState([]);
  const [error, setError] = useState("");
  const [userNotFoundError, setUserNotFoundError] = useState(false);
  const [userFound, setUserFound] = useState(false);

  const fetchUserDetails = () => {
    axios
      .get("http://localhost:9000/users/" + userId)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setError("");
        setUserDetails(response.data);
        setUserFound(true);
      })
      .catch((error) => {
        if (error.response.status === 400) setError(error.response.data);
        else {
          setError("User does not exist!");
          setUserDetails("");
          setUserNotFoundError(true);
        }
      });
  };

  return (
    <div>
      <div className={classes.SearchForm}>
        <div>
          <div className={classes.SearchLabel}>
            <Typography variant="h4">
              Customer Details <br />
            </Typography>
            <Typography variant="h6">
              Search by User Id:
              <input
                className={classes.SearchText}
                type="text"
                defaultValue={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <Button
                variant="button"
                type="submit"
                className={classes.FilterButton}
                onClick={() => fetchUserDetails()}
              >
                <Typography>Search</Typography>
              </Button>{" "}
            </Typography>
            {error && (
              <>
                <small className={classes.errorMessage}>{error}</small>
              </>
            )}

            {userFound && (
              <>
                <br />
                <Card className={classes.card}>
                  <CardMedia alt={user.userId} className={classes.media} />
                  <CardContent className={classes.cardContent}>
                    <Typography>First Name: {user.firstName}</Typography>
                    <Typography>Last Name: {user.lastName}</Typography>
                    <Typography>Address: {user.address}</Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Typography>Phone Number: {user.phoneNumber}</Typography>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReports;
