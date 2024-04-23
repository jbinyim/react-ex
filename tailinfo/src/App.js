import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import GalleryHome from "./pages/GalleryHome";
import DiaryHome from "./pages/DiaryHome";

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
