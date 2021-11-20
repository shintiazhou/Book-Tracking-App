import './App.css';
import Header from "./components/Header"
import Library from "./pages/Library"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
