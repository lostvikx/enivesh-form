import React from "react";

// field.props = {
//   labelName: ...
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

  const handleMarriageStatusChange = (ev) => {
    ev.preventDefault();
    // console.log("change detected", ev.target.value.toLowerCase());

    const marritalStatus = ev.target.value.toLowerCase();
    const marriageDate = document.getElementById("dateOfMarriage");

    if (marritalStatus === "married") {
      marriageDate.disabled = false;
    } else {
      marriageDate.disabled = true;
    }
  }

  // make field required

  let select = null;

  if (data.inputName === "maritalStatus") {
    select = (
      <select id={data.inputName} name={data.inputName} defaultValue="" onChange={handleMarriageStatusChange} required>
        {options}
      </select>
    );
  } else {
    select = (
      <select id={data.inputName} name={data.inputName} defaultValue="" required>
        {options}
      </select>
    );
  }

  // make field required

  return (
    <label htmlFor={data.inputName}>
      <span className="input-label">{data.labelName}<span id="required-star">* </span></span>
      {
        (data.inputType === "select") 
          ? select 
          : (data.inputName === "dateOfMarriage") 
            ? <input type={data.inputType} name={data.inputName} id={data.inputName} disabled required />
            : <input type={data.inputType} name={data.inputName} id={data.inputName} required />
      }
    </label>
  );
}