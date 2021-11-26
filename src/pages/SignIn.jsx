import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

function SignIn(props) {
  const handleSignIn = () => {
    props.wallet.requestSignIn(
      props.nearConfig.contractName,
      "NEAR Guest Book"
    );
  };
  const handleSignOut = () => {
    props.wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };
  return (
    <Container>
      <Paper elevation={5} className="paper">
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
        {props.currentUser ? (
          <Button variant="contained" color="primary" onClick={handleSignOut}>
            Sign out
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSignIn}>
            Sign in with near
          </Button>
        )}
      </Paper>
    </Container>
  );
}

// -------------------------- styles-----------------------------

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  ".image": {
    margin: "auto",
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
