import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import LeftSide from "./components/leftside";
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <LeftSide/>
        <Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
