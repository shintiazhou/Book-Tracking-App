import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Link to="/" className={classes.title}>
            HOME
          </Link>
          <Link to="/library">
            <IconButton>
              <LibraryBooksIcon className={classes.library} />
            </IconButton>
          </Link>
          <Link to="/login">LOG IN</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  library: {
    color: "white",
    margin: "0 10px",
    justifyContent: "flex-end",
  },
}));
