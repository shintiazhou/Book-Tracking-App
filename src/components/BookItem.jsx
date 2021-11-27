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

  const [mouseMoving, setMouseMoving] = useState(false);
  const [thumb, setThumb] = useState(
    "https://i.ibb.co/cCPcChn/image-loading.gif"
  );

  const [device, setdevice] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setdevice("tablet");
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      setdevice("mobile");
    }
    setdevice("desktop");
    const delay = setTimeout(() => {
      setThumb(
        props.object.book_image ? props.object.book_image : props.object.image
      );
    }, 1000);
    return () => clearTimeout(delay);
  }, [props.object.book_image, props.object.image]);

  const handleClick = () => {
    !mouseMoving && toggleBackdrop(true);
    setBookDetails(props.object);
  };
  const handleMove = (e) => {
    setMouseMoving(true);
    setTimeout(() => setMouseMoving(false), 100);
  };
  return (
    <Container style={{ paddingRight: !props.object.image && "30px" }}>
      <div
        className="inner"
        onClick={handleClick}
        onMouseMove={device === "desktop" && handleMove}
      >
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
