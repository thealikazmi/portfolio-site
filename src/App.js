import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import LeftSide from "./components/leftside";
import Aboutus from "./components/Aboutus";
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <LeftSide/>
        <Routes>
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
