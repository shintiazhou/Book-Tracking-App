import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import ListNames from "../components/ListNames";
import { styled } from "@mui/material/styles";
import BookDetails from "../components/BookDetails";
import Backdrop from "@mui/material/Backdrop";
import { ItemBackdropContext } from "../context/ItemBackdropContext";

const Homepage = () => {
  // backdrop in homepage
  const { openBackdrop, setOpenBackdrop } = useContext(ItemBackdropContext);
  // handle backdrop close
  const handleClose = (e) => {
    e.target.className.includes("MuiBackdrop-root") && setOpenBackdrop(false);
  };

  return (
    <Container>
      <Typography variant="h1" className="header">
        The New York Times Best Sellers
      </Typography>
      <ListNames />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleClose}
      >
        <BookDetails />
      </Backdrop>
    </Container>
  );
};

// -------------------------- styles-----------------------------

const Container = styled("div")(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.up("xl")]: {
    margin: "0 100px",
  },
  ".header": {
    marginBottom: "20px",
    padding: "20px 0 ",
    borderBottom: "2px solid white",
  },
}));

export default Homepage;
