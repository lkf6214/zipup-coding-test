import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mbti from "./Mbti";
import Result from "./components/Result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mbti />} />
        <Route path="/result/:key" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
