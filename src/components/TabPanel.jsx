import React, { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import BookItem from "./BookItem";
function TabPanel(props) {
  const { library } = useContext(LibraryContext);
  const { children, value, index, ...other } = props;

  let status = index === 0 ? "List" : index === 1 ? "Read" : "Finished";
  let object = library && library.filter((v) => v.status === status);

  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {!object.length == 0 ? (
              object.map((item) => {
                return (
                  <Grid item xs={6} md={3} lg={2}>
                    <BookItem key={item.book_id} object={item} />
                  </Grid>
                );
              })
            ) : (
              <div>this categories is empty start adding book to {status}</div>
            )}
          </Grid>
        </div>
      )}
    </Container>
  );
}
const Container = styled("div")(({ theme }) => ({
  padding: "30px 0",
}));
export default TabPanel;
