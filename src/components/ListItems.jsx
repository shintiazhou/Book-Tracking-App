import React, { useEffect, useState } from "react";
import axiosInstance from "../config/api";
import BookItem from "./BookItem";
import useEmblaCarousel from "embla-carousel-react";
import { styled } from "@mui/material/styles";

function ListItems(props) {
  const [data, setData] = useState(null);

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
    getListItems();
  }, [props.list_name_encoded]);

  console.log(data);

  return (
    <Container>
      <div className="viewport" ref={viewportRef}>
        <div className="carousel">
          {data &&
            data.map((bookList, i) => {
              return <BookItem key={i} object={bookList} />;
            })}
        </div>
      </div>
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  position: "relative",
  maxWidth: "670px",
  marginLeft: "auto",
  marginRight: "auto",
  ".carousel": {
    display: "flex",
    overflowX: "visible",
  },
}));

export default ListItems;
