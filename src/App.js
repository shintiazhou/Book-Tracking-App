import React, { useState } from 'react'
import './App.css';
import Header from "./components/Header"
import Library from "./pages/Library"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router-dom"
import { ItemBackdropContext } from "./context/ItemBackdropContext"
import { BookDetailsContext } from "./context/BookDetailsContext"

function App() {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [bookDetails, setBookDetails] = useState({});
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
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
