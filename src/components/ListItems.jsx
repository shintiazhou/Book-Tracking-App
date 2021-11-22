import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axiosInstance from "../config/api";

function ListItems(props) {
  const [data, setData] = useState(null);

  console.log(data);
  useEffect(() => {
    const getListItems = async () => {
      try {
        await axiosInstance()
          .get(`${props.list_name_encoded}.json`)
          .then((res) => setData(res.data.results.books));
      } catch (err) {
        console.log(err.message);
      }
    };
    getListItems();
  }, [props.list_name_encoded]);

  return (
    <div>
      {data &&
        data.map((bookList, i) => {
          return (
            <div>
              <Typography variant="h3">{bookList.title}</Typography>
            </div>
          );
        })}
    </div>
  );
}

export default ListItems;
