import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/about" element={<About />} exact></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
