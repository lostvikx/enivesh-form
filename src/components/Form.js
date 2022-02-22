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

const Form = (props) => {

  const [saves, setSaves] = useState(0);

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

    // if (totalUserData[props.formId] == null) {
    //   totalUserData[props.formId] = [];
    // }

    setSaves(saves + 1);

    // console.log(userData);
    totalUserData[props.formId].push(userData);
    console.log(totalUserData);
    evt.target.reset();
    
  }

  const inputFields = fields[props.formId].map((field, key) => <FormField data={field} key={key} />);

  const userName = (saves === 0) ? "Self" : (saves === 1) ? "Spouse" : "Other"

  return (
    <form onSubmit={handleSubmit}>
      <legend>{props.formName}: {userName}</legend>
      { inputFields }
      <button type="submit">Save</button>
    </form>
  );
}

export { Form, totalUserData };