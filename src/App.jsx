import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import NavBar from "./components/NavBar"
// import AddButton from "./components/AddButton.jsx"
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import CommonLayout from "./layout/CommonLayout.jsx";
import AddPost from "./pages/AddPost.jsx";
import Detail from "./pages/Detail"
import Splash from "./Splash.jsx"
import { useState, useEffect } from "react";

function App() {
  const [showSplashscreen, setShowSplashscreen] = useState(
    () => !JSON.parse(localStorage.getItem("showedSplashscreen"))
  );

  useEffect(() => {
    setTimeout(() => {
      // Update local state to trigger component rerender
      setShowSplashscreen(false);
      // Update localStorage for next time app is mounted
      // set true
      // localStorage.setItem("showedSplashscreen", JSON.stringify(false)); 
    }, 4000);
  }, []);

  return showSplashscreen ? (
    <Splash />
  ) : (
    <>
      <div className="container">
        <Router>
          {/* <NavBar />
          <AddButton /> */}
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} exact></Route>
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
