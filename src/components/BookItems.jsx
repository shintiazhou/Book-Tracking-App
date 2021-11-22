import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

function BookItems(props) {
  return (
    <Container>
      <div className="inner">
        <img
          width="100%"
          className="image"
          src={props.object.book_image}
          alt={props.object.title}
        />
        <div className="caption">
          <Typography variant="h3">{props.object.title}</Typography>
        </div>
      </div>
    </Container>
  );
}
const Container = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  minWidth: "50%",
  marginRight: "20px",
}));
export default BookItems;
