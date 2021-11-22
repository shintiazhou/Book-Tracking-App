import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ListItems from "./ListItems";

import axiosInstance from "../config/api";

function ListNames() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //get list name each genre/type of books
    const getListNames = async () => {
      await axiosInstance()
        .get("names.json")
        .then((res) => setData(res.data.results.filter((v, i) => i < 8)))
        .catch((err) => console.log(err.message));
    };
    getListNames();
  }, []);

  return (
    <Container>
      {data &&
        data.map((list, i) => {
          return (
            <div key={i}>
              <Typography variant="h2" className="listName">
                {list.display_name}
              </Typography>
              <ListItems list_name_encoded={list.list_name_encoded} />
            </div>
          );
        })}
    </Container>
  );
}
// -------------------------- styles-----------------------------
const Container = styled("div")(({ theme }) => ({
  ".listName": {
    padding: "20px 0 10px 0",
  },
}));

export default ListNames;
