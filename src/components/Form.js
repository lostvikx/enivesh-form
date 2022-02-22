import React, { useState } from "react";
import FormField from "./FormField";
import fields from "../formFields";

const totalUserData = {
  personalInfo: [],
  liquidAssets: [],
  investments: [],
  fixedAssets: [],
  otherAssets: [],
  lifeInsurance: [],
  mediclaim: [],
  childrenEducation: [],
  pensionIncome: [],
  otherIncome: [],
  rentalRealEstate: [],
  personalExpenses: [],
  largeExpenditure: []
};

const alertUser = (message, color, time=3000) => {

  const saveMessage = document.getElementById("save-message");

  saveMessage.textContent = message;
  saveMessage.style.visibility = "visible";
  if (color === "red") {
    saveMessage.style.backgroundColor = "rgb(230, 106, 106)";
    saveMessage.style.color = "white";
  } else {
    saveMessage.style.backgroundColor = "rgb(180, 255, 157)";
    saveMessage.style.color = "black";
  }
  
  // hide message after 3s
  setTimeout(() => saveMessage.style.visibility = "hidden", time);

}

const Form = (props) => {

  const [saves, setSaves] = useState(0);
  const userName = (saves === 0) ? "Self" : (saves === 1) ? "Spouse" : "Other";

  const handleSubmit = (evt) => {

    evt.preventDefault();
    const userData = {};

    // gets the entire data from the input-form
    const formData = new FormData(evt.target);

    // adds the form data to the userData object
    for (const data of formData) {
      const label = data[0];
      const value = data[1];
      userData[label] = value;
    }

    setSaves(saves + 1);

    // console.log(userData);
    totalUserData[props.formId].push(userData);
    console.log(totalUserData);

    alertUser(`${props.formName} for '${userName}' saved successfully 🎉`, "green");

    evt.target.reset();
    
  }

  const inputFields = fields[props.formId].map((field, key) => <FormField data={field} key={key} />);

  return (
    <form onSubmit={handleSubmit} id={props.formId}>
      <legend>{props.formName}: {userName}</legend>
      <div className="input-fields">
        { inputFields }
      </div>
      <button type="submit" className="save-btn">Save</button>
    </form>
  );
}

export { Form, totalUserData, alertUser };