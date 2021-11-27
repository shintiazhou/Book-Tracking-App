import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import BookDetailsContext from "../context/book-details/BookDetailsContext";
import BackdropContext from "../context/backdrop/BackdropContext";
import LibraryContext from "../context/library/LibraryContext";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function BookDetails(props) {
  const { currentUser, contract } = props;
  const [categories, setCategories] = useState("List");
  const [isLoading, setIsLoading] = useState(false);

  const backdropContext = useContext(BackdropContext);
  const { toggleBackdrop } = backdropContext;

  const bookDetailsContext = useContext(BookDetailsContext);
  const { bookDetails } = bookDetailsContext;

  const libraryContext = useContext(LibraryContext);
  const { library, setLibrary } = libraryContext;

  let addedToBookList = library
    ? library.length !== 0 && library.find((v) => v.title === bookDetails.title)
    : null;

  const handleClose = () => {
    toggleBackdrop(false);
  };
  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  const handleSubmit = async () => {
    if (currentUser) {
      if (!addedToBookList) {
        setIsLoading(true);
        await contract
          .add_book({
            book: {
              title: bookDetails.title,
              description: bookDetails.description,
              status: categories,
              image: bookDetails.book_image,
            },
          })
          .then(() => {
            contract
              .get_books({
                account_id: currentUser.accountId,
                skip: 0,
                limit: 30,
              })
              .then((books) => setLibrary(books))
              .catch((err) => console.log(err));
          });
        setIsLoading(false);
      } else if (addedToBookList) {
        setIsLoading(true);
        await contract
          .update_book({
            book_id: addedToBookList.book_id,
            status: categories,
          })
          .then(() => {
            contract
              .get_books({
                account_id: currentUser.accountId,
                skip: 0,
                limit: 30,
              })
              .then((books) => setLibrary(books));
          })
          .catch((err) => console.log(err));
        setIsLoading(false);
      }
    } else {
      alert("login first");
    }
  };
  const handleDelete = async () => {
    setIsLoading(true);
    await contract
      .delete_book({
        book_id: addedToBookList.book_id,
      })
      .then(() =>
        contract
          .get_books({
            account_id: currentUser.accountId,
            skip: 0,
            limit: 30,
          })
          .then((books) => setLibrary(books))
      )
      .then(() => handleClose())
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  return (
    <Container>
      <Typography variant="h2">
        {addedToBookList && "Added To : " + addedToBookList.status}
      </Typography>
      <img
        className="image"
        width="50%"
        src={
          bookDetails.book_image
            ? bookDetails.book_image
            : bookDetails.image
            ? bookDetails.image
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
          defaultValue={"List"}
        >
          <MenuItem
            style={{
              width: "270px",
            }}
            value={"List"}
          >
            List
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
      {addedToBookList && window.location.pathname === "/library" && (
        <Button
          onClick={handleDelete}
          className="remove"
          variant="contained"
          color="error"
        >
          remove from {addedToBookList.status}
        </Button>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
  maxWidth: "90%",
  backgroundColor: "#ecf3f4",

  ".caption": {
    padding: "0 10px",
    margin: "15px 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  ".remove": {
    marginTop: "20px",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
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
