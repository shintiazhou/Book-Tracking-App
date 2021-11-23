import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { BookItemContext } from "../context/BookItemContext";

function BookItems(props) {
  const { setOpenBackdrop, openBackdrop } = useContext(BookItemContext);

  const handleClick = () => {
    setOpenBackdrop(true);
  };

  return (
    <Container>
      <div className="inner" onClick={handleClick}>
        <div className="imageContainer">
          <div className="overlay"></div>
          <img
            height="100%"
            width="100%"
            src={props.object.book_image}
            alt={props.object.title}
          />
        </div>
        <div className="caption">
          <Typography variant="h3">{props.object.title}</Typography>
          <Typography variant="span">{props.object.author}</Typography>
        </div>
      </div>
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  minWidth: "50%",
  position: "relative",
  paddingRight: "25px",
  ".inner": {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    cursor: "pointer",
  },
  ".imageContainer": {
    width: "100%",
    height: "70%",
  },
  ".overlay": {
    backgroundColor: "#465461",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "opacity .5s",
    "&:hover": {
      opacity: ".5",
    },
  },
  ".caption": {
    margin: "10px 0",
    paddingBottom: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "30%",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "20%",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "12%",
  },
}));

export default BookItems;
