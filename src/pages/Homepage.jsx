import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axiosInstance from "../config/api";

const Homepage = () => {
  const classes = useStyles();

  useEffect(() => {
    axiosInstance.get("best-sellers/history.json").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Typography variant="h1">The New York Times Best Sellers</Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default Homepage;
