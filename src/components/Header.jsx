import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function MenuAppBar({ currentUser }) {
  return (
    <Container>
      <AppBar position="fixed" color="primary" className="appBar">
        <Toolbar>
          <div className="title">
            <Link to="/">HOME</Link>
          </div>

          <Link to="/library">
            <IconButton>
              <LibraryBooksIcon className="library" />
            </IconButton>
          </Link>
          <Link to="/signin" className="sign-in">
            {currentUser ? "PROFILE" : "SIGN IN"}
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "auto",
  transition: "align-items 2s",
  ".appBar": {
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      fontSize: "16px",
    },
  },
  ".sign-in": {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      margin: "0 30px",
    },
  },
  ".title": {
    [theme.breakpoints.up("md")]: {
      margin: "0 30px",
    },
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
    },
  },
  ".library": {
    color: "white",
    margin: "0 10px",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      margin: "0 30px",
    },
  },
}));
