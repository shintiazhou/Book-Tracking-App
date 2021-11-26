import React, { useState, useEffect } from 'react'
import './App.css';
import Header from "./components/Header"
import Library from "./pages/Library"
import SignIn from "./pages/SignIn"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router-dom"
import { ItemBackdropContext } from "./context/ItemBackdropContext"
import { BookDetailsContext } from "./context/BookDetailsContext"
import { LibraryContext } from "./context/LibraryContext"
import BookDetails from "./components/BookDetails";
import Backdrop from "@mui/material/Backdrop";

function App({ contract, currentUser, nearConfig, wallet }) {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [bookDetails, setBookDetails] = useState({});
  const [library, setLibrary] = useState([]);

  const handleClose = (e) => {
    e.target.className.includes("Backdrop") && setOpenBackdrop(false);
    e.target.className.includes("Backdrop") && setBookDetails(null);
  };

  useEffect(() => {
    if (currentUser) {
      contract
        .get_books({
          account_id: currentUser.accountId,
          skip: 0,
          limit: Infinity,
        })
        .then((books) => setLibrary(books));
    }
    return () => {
      setLibrary({})
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={
          <ItemBackdropContext.Provider value={{ openBackdrop, setOpenBackdrop }}>
            <BookDetailsContext.Provider value={{ bookDetails, setBookDetails }}>
              <LibraryContext.Provider value={{ library, setLibrary }}>
                <Homepage contract={contract} currentUser={currentUser} />
              </LibraryContext.Provider>
            </BookDetailsContext.Provider>
          </ItemBackdropContext.Provider>} />
        <Route path="/signin"
          element={<SignIn nearConfig={nearConfig} wallet={wallet} currentUser={currentUser} />} />
        <Route exact path="/library" element={
          <ItemBackdropContext.Provider value={{ openBackdrop, setOpenBackdrop }}>
            <BookDetailsContext.Provider value={{ bookDetails, setBookDetails }}>
              <LibraryContext.Provider value={{ library, setLibrary }}>
                <Library contract={contract} currentUser={currentUser} />
              </LibraryContext.Provider>
            </BookDetailsContext.Provider>
          </ItemBackdropContext.Provider>} />
      </Routes>
      {bookDetails && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
          onClick={handleClose}
        >
          <ItemBackdropContext.Provider value={{ openBackdrop, setOpenBackdrop }}>
            <BookDetailsContext.Provider value={{ bookDetails, setBookDetails }}>
              <LibraryContext.Provider value={{ library, setLibrary }}>
                <BookDetails contract={contract} currentUser={currentUser} />
              </LibraryContext.Provider>
            </BookDetailsContext.Provider>
          </ItemBackdropContext.Provider>

        </Backdrop>
      )}
    </div>
  );
}

export default App;
