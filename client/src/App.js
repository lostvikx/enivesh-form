import React from "react";
import Home from "./Home";
import FullForm from "./FullForm";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Home />
      <FullForm />
    </div>
  );
}