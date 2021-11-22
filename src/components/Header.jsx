import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  return (
    <Container>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Link to="/" className="title">
            HOME
          </Link>
          <Link to="/library">
            <IconButton>
              <LibraryBooksIcon className="library" />
            </IconButton>
          </Link>
          <Link to="/login">LOG IN</Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

const Container = styled("div")(({ theme }) => ({
  flexGrow: 1,
  ".listName": {
    padding: "20px 0",
  },
  ".menuButton": {
    marginRight: theme.spacing(2),
  },
  ".title": {
    flexGrow: 1,
  },
  ".library": {
    color: "white",
    margin: "0 10px",
    justifyContent: "flex-end",
  },
}));
