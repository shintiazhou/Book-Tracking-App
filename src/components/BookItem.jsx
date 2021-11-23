import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import EmblaCarousel from "embla-carousel-react";

const embla = EmblaCarousel(emblaNode);

function BookItems(props) {
  useEffect(() => {
    if (embla && embla.slideNodes().length !== slides.length) {
      embla.reInit();
    }
  }, [embla, props.object]);

  return (
    <Container>
      <div className="container">
        <div className="inner">
          <img
            height="80%"
            width="100%"
            src={props.object.book_image}
            alt={props.object.title}
          />
          <div className="caption">
            <Typography variant="h3">{props.object.title}</Typography>
            <Typography variant="span">{props.object.author}</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "5px",
  minWidth: "50%",
  marginRight: "20px",
  ".inner": {
    position: "relative",
    overflow: "hidden",
    height: "350px",
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
    minWidth: "10%",
  },
}));

export default BookItems;
