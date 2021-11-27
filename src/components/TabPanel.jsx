import React, { useContext } from "react";

import LibraryContext from "../context/library/LibraryContext";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import BookItem from "./BookItem";
function TabPanel(props) {
  const libraryContext = useContext(LibraryContext);
  const { library } = libraryContext;

  const { children, value, index, ...other } = props;

  let status = index === 0 ? "List" : index === 1 ? "Read" : "Finished";
  let object =
    library && library.length !== 0
      ? library.filter((v) => v.status === status)
      : null;

  return (
    <Container role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <div sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {object && object.length !== 0 ? (
              object.map((item, i) => {
                return (
                  <Grid
                    key={i}
                    style={{ margin: "auto" }}
                    item
                    xs={10}
                    sm={6}
                    md={4}
                    lg={2}
                  >
                    <BookItem key={item.book_id} object={item} />
                  </Grid>
                );
              })
            ) : (
              <div className="emptyTabs">
                <Typography variant="h1">
                  This categories is empty start{" "}
                  <Link to="/" className="colorize">
                    Adding Book
                  </Link>{" "}
                  to {status}
                </Typography>
                <img
                  className="img"
                  src="https://i.ibb.co/4PpVYf2/no-data.png"
                  alt="no-data"
                />
              </div>
            )}
          </Grid>
        </div>
      )}
    </Container>
  );
}
const Container = styled("div")(({ theme }) => ({
  ".img": {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  padding: "30px 0",
  ".colorize": {
    color: " #C211A1;",
    borderBottom: "1px solid  #C211A1",
  },
  ".emptyTabs": {
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    h1: {
      margin: "30px 0",
    },
  },
}));
export default TabPanel;
