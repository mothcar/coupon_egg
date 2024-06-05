import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import AddButton from "./components/AddButton.jsx"
import Home from "./pages/Home"
import About from "./pages/About.jsx"
import Login from "./pages/Login.jsx"

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <NavBar />
          <AddButton />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/about" element={<About />} exact></Route>
            <Route path="/login" element={<Login />} exact></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
