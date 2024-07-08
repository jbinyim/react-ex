import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Search from "./routes/Search";
import Video from "./routes/Video";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="/video/*" element={<Video />} />
        <Route path="/movies/:modalId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
