import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ClosetHelper from "./pages/ClosetHelper.jsx";
import WguCapstone from "./pages/WguCapstone.jsx";
import ComicBrick from "./pages/ComicBrick.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

  return (
    <> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ClosetHelper" element={<ClosetHelper />} />
        <Route path="/WguCapstone" element={<WguCapstone />} />
        <Route path="/ComicBrick" element={<ComicBrick />} />
      </Routes>
    </>
  )
}

export default App
