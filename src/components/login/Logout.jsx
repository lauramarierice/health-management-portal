import React from "react";
import { logoutUser } from "../../Common";
import useStyles from "./LoginStyles";
import { Grid, Header, Segment } from "semantic-ui-react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div>
      <Segment color="blue" className={classes.segment}>
        <Grid padded>
          <Grid.Column>
            <Header as="h1">You have been logged out.</Header>
            <p>
              <Button onClick={handleLogout}>Return to Login</Button>
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default Logout;
