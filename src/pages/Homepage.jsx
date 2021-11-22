import React from "react";
import Typography from "@mui/material/Typography";
import ListNames from "../components/ListNames";
import { styled } from "@mui/material/styles";

const Homepage = () => {
  return (
    <Container>
      <Typography variant="h1" className="header">
        The New York Times Best Sellers
      </Typography>
      <ListNames />
    </Container>
  );
};

// -------------------------- styles-----------------------------

const Container = styled("div")(({ theme }) => ({
  ".header": {
    marginBottom: "20px",
    padding: "20px 0 ",
    borderBottom: "2px solid white",
  },
}));

export default Homepage;
