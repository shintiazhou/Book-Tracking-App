import React, { useState, useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { BookDetailsContext } from "../context/BookDetailsContext";
import { LibraryContext } from "../context/LibraryContext";

function BookDetails({ contract }) {
  const [categories, setCategories] = useState("");
  const [submitValue, setSubmitValue] = useState(null);
  const { bookDetails } = useContext(BookDetailsContext);
  const { library, setLibrary } = useContext(LibraryContext);

  useEffect(() => {
    contract.getBooks().then(setLibrary);
  }, []);

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitValue(categories);
    contract
      .addBook({
        title: bookDetails.title,
        description: bookDetails.description,
        status: submitValue,
        image: bookDetails.book_image,
      })
      .then(() => {
        contract.getBooks().then((books) => {
          setLibrary((prevState) => ({ ...prevState, books }));
        });
      });
  };
  console.log(library);

  return (
    <Container>
      <Typography variant="h2">
        {submitValue && "Added To : " + submitValue}
      </Typography>
      <img
        className="image"
        width="50%"
        src={
          bookDetails.book_image
            ? bookDetails.book_image
            : "https://i.ibb.co/cCPcChn/image-loading.gif"
        }
        alt={bookDetails.title}
      />
      <div className="caption">
        <Typography variant="h3">{bookDetails.title}</Typography>
        <Typography variant="span">{bookDetails.author}</Typography>
        <Typography variant="p">{bookDetails.description}</Typography>
      </div>
      <div className="selectBar">
        <div className="add">
          <p>Add To</p>
        </div>
        <Select
          className="select"
          onChange={handleChange}
          variant="standard"
          defaultValue={"Reading-List"}
        >
          <MenuItem
            style={{
              width: "270px",
            }}
            value={"Reading-List"}
          >
            Reading List
          </MenuItem>
          <MenuItem value={"Read"}>Read</MenuItem>
          <MenuItem value={"Finished"}>Finished</MenuItem>
        </Select>
        <Button
          onClick={handleSubmit}
          className="button"
          variant="contained"
          color="success"
        >
          Smart Contract
        </Button>
      </div>
    </Container>
  );
}
const Container = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  borderRadius: "35px",
  padding: "10px 20px 30px 20px",
  maxWidth: "85%",
  backgroundColor: "#ecf3f4",
  ".caption": {
    padding: "0 10px",
    margin: "15px 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  h2: {
    padding: "15px 0",
  },
  ".image": {},
  [theme.breakpoints.up("sm")]: {
    maxWidth: "70%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "45%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "30%",
  },
  ".button": {
    borderRadius: "15px",
    color: "white",
    width: "50%",
    padding: 0,
  },
  ".selectBar": {
    paddingLeft: "12px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#465461",
    width: "100%",
    height: "30px",
    ".add": {
      width: "20%",
      paddingRight: "10px",
      height: "100%",
      borderRight: "1px solid white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ".select": {
      fontSize: ".9rem",
      height: "70%",
      width: "50%",
      margin: "auto",
      marginLeft: "10px",
      color: "white",
      borderColor: "transparent",
      "&:before": {
        borderColor: "transparent",
      },
      "&:after": {
        borderColor: "transparent",
      },
      "&:not(.Mui-disabled):hover::before": {
        borderColor: "transparent",
      },
    },
    svg: {
      fill: "white",
    },
  },
}));
export default BookDetails;
