import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";

const WebApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}


ReactDOM.render(<WebApp />, document.getElementById("root"));