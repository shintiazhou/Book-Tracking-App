import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
// ---------------components----------
import Header from "./components/Header"
import Library from "./pages/Library"
import SignIn from "./pages/SignIn"
import Homepage from "./pages/Homepage"
import Backdrop from "@mui/material/Backdrop";
import BookDetails from "./components/BookDetails";
// ---------------context----------
import BackdropContext from "./context/backdrop/BackdropContext";
import BookDetailsContext from "./context/book-details/BookDetailsContext";


function App(props) {
  const { contract, currentUser, nearConfig, wallet } = props
  // ---------------context configuration----------
  const backdropContext = useContext(BackdropContext);
  const { toggleBackdrop, isOpen } = backdropContext;

  const bookDetailsContext = useContext(BookDetailsContext);
  const { bookDetails, setBookDetails } = bookDetailsContext;



  const handleClose = (e) => {
    e.target.className.includes("Backdrop") && toggleBackdrop(false);
    e.target.className.includes("Backdrop") && setBookDetails(null);
  };

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>

        <Route exact path="/" element={
          <Homepage contract={contract} currentUser={currentUser} />
        } />

        <Route path="/signin"
          element={<SignIn nearConfig={nearConfig} wallet={wallet} currentUser={currentUser} />} />


        <Route exact path="/library" element={
          <Library contract={contract} currentUser={currentUser} />
        } />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      {bookDetails && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isOpen}
          onClick={handleClose}
        >
          <BookDetails contract={contract} currentUser={currentUser} />
        </Backdrop>
      )}
    </div>
  );
}

export default App;
