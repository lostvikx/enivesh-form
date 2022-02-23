import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div className="main-home">
      <h1>Thanks 😇</h1>
      <p>We really appreciate the effort you put in to finish filling up the form.</p>
      <Link to="/" className="back-home">Go back to home</Link>
    </div>
  );
}