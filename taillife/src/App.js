import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GalleryHome from "./pages/GalleryHome";
import DiaryHome from "./pages/DiaryHome";
import NavBar from "./components/NavBar";
import GalleryDetail from "./components/GalleryDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<GalleryHome />} />
        <Route path="/diary" element={<DiaryHome />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
