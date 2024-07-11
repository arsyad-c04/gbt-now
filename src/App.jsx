import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import DetailKegiatan from "./pages/DetailKegiatan";
import Wa from "./pages/Wa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kegiatan/:id" element={<DetailKegiatan />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route path="/join" element={<Wa />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
