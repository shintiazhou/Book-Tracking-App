import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

function BookItems(props) {
  return (
    <Container>
      <img
        className="image"
        src={props.object.book_image}
        alt={props.object.title}
      />
      <div className="caption">
        <Typography variant="h3">{props.object.title}</Typography>
        <Typography variant="span">{props.object.author}</Typography>
      </div>
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  overflow: "hidden",
  minWidth: "50%",
  height: "100%",
  padding: "5px",
  marginRight: "20px",
  ".image": {
    width: "100%",
    borderRadius: "10%",
    margin: "10px -6px",
  },
  ".caption": {
    bottom: 0,
    h3: {
      marginBottom: "4px",
    },
    span: {
      opacity: "50%",
    },
  },

  [theme.breakpoints.up("sm")]: {
    minWidth: "30%",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "20%",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "10%",
  },
}));

export default BookItems;
