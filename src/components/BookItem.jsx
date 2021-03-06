import React, { useContext, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import BackdropContext from "../context/backdrop/BackdropContext";
import BookDetailsContext from "../context/book-details/BookDetailsContext";

function BookItem(props) {
  const backdropContext = useContext(BackdropContext);

  const { toggleBackdrop } = backdropContext;

  const bookDetailsContext = useContext(BookDetailsContext);
  const { setBookDetails } = bookDetailsContext;
  const [thumb, setThumb] = useState(
    "https://i.ibb.co/cCPcChn/image-loading.gif"
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      setThumb(
        props.object.book_image ? props.object.book_image : props.object.image
      );
    }, 1000);
    return () => clearTimeout(delay);
  }, [props.object.book_image, props.object.image]);

  const handleClick = () => {
    toggleBackdrop(true);
    setBookDetails(props.object);
  };
  return (
    <Container style={{ paddingRight: !props.object.image && "30px" }}>
      <div className="inner" onClick={handleClick}>
        <div className="imageContainer">
          <div className="overlay"></div>
          <img
            className="img"
            width="100%"
            src={thumb}
            alt={props.object.title}
          ></img>
        </div>
        <div className="caption">
          <Typography
            variant="h3"
            className={props.object.image && "align-center"}
          >
            {props.object.title}
          </Typography>
          <Typography variant="span">{props.object.author}</Typography>
        </div>
      </div>
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  minWidth: "60%",

  position: "relative",

  ".align-center": {
    textAlign: "center",
  },
  ".inner": {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  ".img": {
    borderRadius: "20px",
  },
  ".imageContainer": {
    position: "relative",
    width: "100%",
    height: "60%",
  },
  ".overlay": {
    borderRadius: "20px",
    backgroundColor: "black",
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
    justifySelf: "flex-end",
    padding: "20px 0",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "50%",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "25%",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "20%",
  },
}));

export default BookItem;
