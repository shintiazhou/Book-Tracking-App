import React from "react";
import Typography from "@material-ui/core/Typography";
import ListNames from "../components/ListNames";
import { makeStyles } from "@material-ui/core/styles";

const Homepage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" className={classes.header}>
        The New York Times Best Sellers
      </Typography>
      <ListNames />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: "20px",
    padding: "20px 0 ",
    borderBottom: "2px solid white",
  },
}));

export default Homepage;
