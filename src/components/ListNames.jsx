import React, { useEffect, useState } from "react";
import axiosInstance from "../config/api";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

function ListNames() {
  const [data, setData] = useState(null);

  const getListNames = async () => {
    try {
      await axiosInstance()
        .get("names.json")
        .then((res) => setData(res.data.results.filter((v, i) => i < 27)));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getListNames();
  }, [data]);

  console.log(data);
  return (
    <Container>
      {data &&
        data.map((list, i) => {
          return (
            <div key={i}>
              <Typography variant="h2" className="listName">
                {list.display_name}
              </Typography>
            </div>
          );
        })}
    </Container>
  );
}

const Container = styled("div")(({ theme }) => ({
  ".listName": {
    padding: "20px 0",
  },
}));

export default ListNames;
