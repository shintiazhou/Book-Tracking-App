import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ListItems from "./ListItems";
import CircularProgress from "@mui/material/CircularProgress";
import axiosInstance from "../config/api";

function ListNames() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    //get list name each genre/type of books
    const getListNames = async () => {
      await axiosInstance()
        .get("names.json")
        .then((res) => {
          setData(res.data.results.filter((v, i) => i < 8));
          setErrorMessage(null);
        })
        .catch((err) => {
          console.log(err.message);
          setErrorMessage(err.message);
        });
    };
    getListNames();
  }, []);

  return (
    <Container>
      {data ? (
        data.map((list, i) => {
          return (
            <div key={i}>
              <Typography variant="h2" className="listName">
                {list.display_name}
              </Typography>
              <ListItems list_name_encoded={list.list_name_encoded} />
            </div>
          );
        })
      ) : errorMessage ? (
        <Typography variant="h3" className="error">
          {errorMessage} please reload after a while...
        </Typography>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  ".listName": {
    padding: "20px 0 10px 0",
  },
  ".error": {
    color: "#ff893b",
    height: "120vw",
  },
}));

export default ListNames;
