import React, { useEffect, useState } from "react";
import axiosInstance from "../config/api";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function ListNames() {
  const classes = useStyles();
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
    <div>
      {data &&
        data.map((list, i) => {
          return (
            <div key={i}>
              <Typography variant="h2" className={classes.ListName}>
                {list.display_name}
              </Typography>
            </div>
          );
        })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  ListName: {
    padding: "20px 0 ",
  },
}));

export default ListNames;
