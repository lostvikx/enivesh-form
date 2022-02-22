import React from "react";
import { totalUserData, alertUser } from "./Form";

const handleClick = async (evt) => {

  evt.preventDefault();
  let formPass = true;

  // every form must be filled atleast once, before sending it to the backend
  for (const formId in totalUserData) {
    
    if (totalUserData[formId].length === 0) {
      formPass = false;
      break;
    }

  }

  if (formPass) {
    try {
      const res = await fetch("/user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(totalUserData)
      });
    
      const data = await res.json();
    
      console.log(data);
    } catch (err) {
      console.error(err, "couldn't submit the data!");
    }
  } else {
    console.log("fill the entire form");
    alertUser("Please fill the entire form! 🤖", "red");
  }

}

export default function SendBtn() {
  return (
    <button onClick={handleClick} className="save-data">
      Submit Form
    </button>
  );
}