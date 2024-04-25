import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GalleryHome from "./pages/GalleryHome";
import DiaryHome from "./pages/DiaryHome";
import NavBar from "./components/NavBar";
import GalleryDetail from "./components/GalleryDetail";
import DiaryEdit from "./pages/DiaryEdit";
import DiaryNew from "./pages/DiaryNew";
import DiaryInfo from "./pages/DiaryInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<GalleryHome />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
        <Route path="/diary" element={<DiaryHome />} />
        <Route path="/new" element={<DiaryNew />} />
        <Route path="/diaryinfo/:id" element={<DiaryInfo />} />
        <Route path="/edit/:id" element={<DiaryEdit />} />
      </Routes>
    </div>
  );
}

export default App;
