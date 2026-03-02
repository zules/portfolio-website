import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ClosetHelper from "./pages/ClosetHelper.jsx";

import './App.css'

function App() {

  return (
    <>
      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/closethelper">Closet Helper</NavLink>

        {/* External link: use <a>, not Link/NavLink */}
        <a href="https://example.com" target="_blank" rel="noreferrer">
          External
        </a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/closethelper" element={<ClosetHelper />} />
      </Routes>
    </>
  )
}

export default App
