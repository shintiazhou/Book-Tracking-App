import React, { useEffect, useState } from "react";
import axiosInstance from "../config/api";
import BookItem from "./BookItem";
import useEmblaCarousel from "embla-carousel-react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function ListItems(props) {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [viewportRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    //get list items based on names/type
    const getListItems = async () => {
      await axiosInstance()
        .get(`${props.list_name_encoded}.json`)
        .then((res) => setData(res.data.results.books))
        .catch((err) => console.log(err.message));
    };
    data && setIsError(false);
    getListItems();
  }, [data, props.list_name_encoded]);

  console.log(data);

  setTimeout(() => {
    !data && setIsError(true);
  }, 3000);

  return (
    <Container>
      <div className="embla__viewport" ref={data ? viewportRef : null}>
        <div className="carousel">
          {data ? (
            data.map((bookList, i) => {
              return <BookItem key={i} object={bookList} />;
            })
          ) : isError ? (
            <Typography variant="h3" className="error">
              failed to load, too many request please try again after a while...
            </Typography>
          ) : (
            <CircularProgress color="secondary" />
          )}
        </div>
      </div>
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  position: "relative",
  borderBottom: "1px solid rgba(255,255,255,.2)",
  paddingBottom: "20px",
  width: "100%",
  overflow: "hidden",

  ".carousel": {
    display: "flex",
    justifyContent: "space-between",
    userSelect: "none",
    paddingRight: "-25px",
  },
  ".error": {
    color: "#ff893b",
  },
}));

export default ListItems;
