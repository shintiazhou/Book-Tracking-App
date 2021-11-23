import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

function BookItems(props) {
  return (
    <Container>
      <div className="inner">
        <img
          height="70%"
          width="100%"
          src={props.object.book_image}
          alt={props.object.title}
        />
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
  },
  ".caption": {
    margin: "10px 0",
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
