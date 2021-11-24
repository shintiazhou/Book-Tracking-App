import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import ListNames from "../components/ListNames";
import { styled } from "@mui/material/styles";
import BookDetails from "../components/BookDetails";
import Backdrop from "@mui/material/Backdrop";
import { ItemBackdropContext } from "../context/ItemBackdropContext";
import { BookDetailsContext } from "../context/BookDetailsContext";

const Homepage = () => {
  const { openBackdrop, setOpenBackdrop } = useContext(ItemBackdropContext);

  const { bookDetails, setBookDetails } = useContext(BookDetailsContext);

  const handleClose = (e) => {
    e.target.className.includes("Backdrop") && setOpenBackdrop(false);
    e.target.className.includes("Backdrop") && setBookDetails(null);
  };

  return (
    <Container>
      <Typography variant="h1" className="header">
        The New York Times Best Sellers
      </Typography>
      <ListNames />
      {bookDetails && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
          onClick={handleClose}
        >
          <BookDetails />
        </Backdrop>
      )}
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
