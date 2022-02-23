import React from "react";
import Home from "./Home";
import FullForm from "./FullForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Thanks from "./Thanks";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/form" element={<FullForm />}></Route>
          <Route exact path="/thanks" element={<Thanks />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}