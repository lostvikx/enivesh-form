import React from "react";
import FormField from "./FormField";
import fields from "../formFields";

const totalUserData = {};

const Form = (props) => {

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

  if (totalUserData[props.formId] == null) {
    totalUserData[props.formId] = [];
  }

  // console.log(userData);
  totalUserData[props.formId].push(userData);
  console.log(totalUserData);
  evt.target.reset();
  
}

  const inputFields = fields[props.formId].map((field, key) => <FormField data={field} key={key} />);

  return (
    <form onSubmit={handleSubmit}>
      <legend>{props.formName}:</legend>
      { inputFields }
      <button type="submit">Save</button>
    </form>
  );
}

export {Form, totalUserData};