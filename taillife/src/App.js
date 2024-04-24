import "./App.css";
import GalleryHome from "./pages/GalleryHome";
import DiaryHome from "./pages/DiaryHome";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<GalleryHome />} />
        <Route path="/diary" element={<DiaryHome />} />
      </Routes>
    </div>
  );
}

export default App;
