import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ClosetHelper from "./pages/ClosetHelper.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

  return (
    <> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/closethelper" element={<ClosetHelper />} />
      </Routes>
    </>
  )
}

export default App
