import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

function SignIn(props) {
  const handleSignIn = async () => {
    props.wallet.requestSignIn(
      props.nearConfig.contractName,
      "NEAR Guest Book"
    );
  };
  const handleSignOut = () => {
    props.wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };
  console.log(props.currentUser);
  return (
    <Container>
      <Paper elevation={5} className="paper">
        {props.currentUser ? (
          <div className="profile">
            <img
              width="50%"
              src="https://i.ibb.co/GxH0DL7/profile.png"
              alt="profile"
            />
            <Typography variant="h1" component="h2">
              {props.currentUser.accountId}
            </Typography>
            <Typography variant="h2" component="p">
              BALANCE : {props.currentUser.balance}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        ) : (
          <div>
            <img
              className="image"
              width="30%"
              src="https://i.ibb.co/BsJxZkq/near-protocol-near-logo.png"
              alt="near logo"
            />
            <Typography variant="h1">Hello, Friend!</Typography>
            <Typography variant="p">
              Enter your personal details and start journey with us!
            </Typography>
            <Button variant="contained" color="primary" onClick={handleSignIn}>
              Sign in with near
            </Button>
          </div>
        )}
      </Paper>
    </Container>
  );
}

// -------------------------- styles-----------------------------

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.up("xl")]: {
    margin: "0 100px",
  },
  ".image": {
    margin: "auto",
  },
  ".profile": {
    width: "100%",
    color: "#1A0551",
    h2: {
      margin: "18px 0",
    },
  },
  ".paper": {
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "500px",
    minHeight: "400px",
    padding: "20px",
  },
  h1: {
    marginBottom: "10px",
  },
  Button: {
    marginTop: "30px",
  },
}));

export default SignIn;
