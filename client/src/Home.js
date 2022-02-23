import React from "react";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Enivesh Form Webpage 👋</h1>
      <p>This form was built with the purpose of using the data to determine our customer's financial postion.</p>
      <Link to="/form" className="fill-form-btn">Fill up the form</Link>
    </div>
  );
}