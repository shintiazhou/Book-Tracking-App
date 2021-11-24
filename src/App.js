import React, { useState, useEffect } from 'react'
import './App.css';
import Header from "./components/Header"
import Library from "./pages/Library"
import SignIn from "./pages/SignIn"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router-dom"
import { ItemBackdropContext } from "./context/ItemBackdropContext"
import { BookDetailsContext } from "./context/BookDetailsContext"

function App({ contract, currentUser, nearConfig, wallet }) {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [bookDetails, setBookDetails] = useState({});



  // useEffect(() => {
  //   // TODO: don't just fetch once; subscribe!
  //   contract.getMessages().then(setMessages);
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={
          <ItemBackdropContext.Provider value={{ openBackdrop, setOpenBackdrop }}>
            <BookDetailsContext.Provider value={{ bookDetails, setBookDetails }}>
              <Homepage />
            </BookDetailsContext.Provider>
          </ItemBackdropContext.Provider>} />
        <Route path="/signin"
          element={<SignIn nearConfig={nearConfig} wallet={wallet} currentUser={currentUser} />} />
        <Route path="/library"
          element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
