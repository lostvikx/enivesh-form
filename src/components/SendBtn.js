import React from "react";
import { totalUserData } from "./Form";

const handleClick = async (evt) => {

  evt.preventDefault();
  let formPass = true;

  for (const formId in totalUserData) {
    
    if (totalUserData[formId].length === 0) {
      // console.log(formId, "is empty");
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
  }

  // TODO: send email from emailJS
  // const res = await fetch("/user-data", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(totalUserData)
  // });

  // const data = await res.json();

  // console.log(data);

}

export default function SendBtn() {
  return (
    <button onClick={handleClick} className="save-data">
      Submit Data
    </button>
  );
}