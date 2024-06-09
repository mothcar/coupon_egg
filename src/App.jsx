import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import CommonLayout from "./layout/CommonLayout.jsx";
import AddPost from "./pages/AddPost.jsx";
import Detail from "./pages/Detail"
import Splash from "./Splash.jsx"
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Splash />}exact></Route>
            <Route path="/register" element={<Register />}exact></Route>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />}exact></Route>
              <Route path="/about" element={<About />} exact></Route>
              <Route path="/login" element={<Login />} exact></Route>
            </Route>
            <Route element={<CommonLayout />}>
              <Route path="/addPost" element={<AddPost />} exact></Route>
              <Route path="/goDetail" element={<Detail />} exact></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
