import React from "react";

// field.props = {
//   labelName: ...
//   labelFor: ...
//   inputType: ...
//   inputName: ...
// }

// A simple form input field.
export default function FormField(props) {

  const data = props.data;

  let options = [];

  try {
    
    options = data.options.map((opt, i) => {
      return (
        <option value={opt} key={i+1}>{opt}</option>
      );
    });
    options.unshift((<option key={0} disabled value="">Select {data.labelName}</option>));
  } catch (err) {
    options = null;
  }

  const select = (
    <select id={data.labelFor} name={data.inputName}>
      {options}
    </select>
  );

  return (
    <label htmlFor={data.labelFor}>
      {data.labelName}<span id="required-star">* </span>
      {
        (data.inputType == "select") 
          ? select 
          : <input type={data.inputType} name={data.inputName} id={data.labelFor} />
      }
    </label>
  );
}