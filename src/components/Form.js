import React from "react";
import FormField from "./FormField";
import fields from "../formFields";

const inputFields = fields.map(field => <FormField data={field} key={field.id} />);

const handleSubmit = (evt) => {
  evt.preventDefault();
  const userData = {};

  // gets the entire data from the input-form
  const formData = new FormData(document.getElementById("personal-info"));

  // adds the form data to the userData object
  for (const data of formData) {
    const label = data[0];
    const value = data[1];
    userData[label] = value;
  }

  console.log(userData);
}

export default function Form(props) {

  return (
    <form id="personal-info" onSubmit={handleSubmit}>
      <legend>{props.formName}:</legend>
      { inputFields }
      <button type="submit" id="add-individual">Save</button>
    </form>
  )
}