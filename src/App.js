import React, { useState } from 'react'
import './App.css';
import Header from "./components/Header"
import Library from "./pages/Library"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router-dom"
import { BookItemContext } from "./context/BookItemContext"

function App() {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={
          <BookItemContext.Provider value={{ openBackdrop, setOpenBackdrop }}>
            <Homepage />
          </BookItemContext.Provider>

        } />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
