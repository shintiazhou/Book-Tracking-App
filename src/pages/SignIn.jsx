import React from "react";
import { styled } from "@mui/material/styles";

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
    <div>
      <h1>Sign In</h1>
      {props.currentUser ? (
        <button onClick={handleSignOut}>Log out</button>
      ) : (
        <button onClick={handleSignIn}>Log in</button>
      )}
    </div>
  );
}

// -------------------------- styles-----------------------------

const Container = styled("div")(({ theme }) => ({}));

export default SignIn;
