import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-home">
      <h1>Welcome to the ENIVESH Goal Organizer Webpage 👋</h1>
      <p>This site was built with the purpose of using the form data to determine our customers' financial postion.</p>
      <h2>Intructions:</h2>
      <ul>
        <li>Make sure to fill-in all the details carefully</li>
        <li>After filling a certain form click the <code>Save</code> button</li>
        <li>Clicking on the <code>Save</code> sends you a notifications</li>
        <li>You can add additional information after clicking on the save button</li>
        <li>You may see a tick next to the <code>Save</code> button, this shows that you have filled this form before</li>
        <li>Finally, click on the <code className="submitFormBtn">Submit Form</code> button to complete the process</li>
      </ul>
      <Link to="/form" className="fill-form-btn">Fill the form</Link>
    </div>
  );
}