import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Search from "./routes/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/movies/:modalId" element={<Home />} />
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
