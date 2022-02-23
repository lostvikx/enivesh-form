import React from "react";
import { totalUserData, alertUser } from "./Form";
import emailjs from 'emailjs-com';

let fullName = null;

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

  // if (formPass) {
  //   try {
  //     const res = await fetch("/user-data", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(totalUserData)
  //     });
    
  //     const data = await res.json();
    
  //     console.log(data);
  //     window.location.href = "/thanks";
  //   } catch (err) {
  //     console.error(err, "couldn't submit the data!");
  //   }
  // } else {
  //   alertUser("Please fill the entire form! 🤖", "red");
  // }

  if (formPass) {

    fullName = `${totalUserData.personalInfo[0].firstName[0].toUpperCase() + totalUserData.personalInfo[0].firstName.slice(1,)} ${totalUserData.personalInfo[0].lastName[0].toUpperCase() + totalUserData.personalInfo[0].lastName.slice(1,)}`;
    // console.log(fullName);

    document.getElementById("totalUserData").value = JSON.stringify(totalUserData);
    document.getElementById("fullName").value = fullName;

    //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
    emailjs.sendForm('service_wv9fgeb', 'template_j5uu2sf', evt.target, 'user_pvGioTjQ0ItUmSUvav5qf')
      .then((result) => window.location.href = "/thanks", (error) => console.error(error));
  } else {
    alertUser("Please fill the entire form! 🤖", "red");
  }

}

export default function SendBtn() {
  return (
    // <button onClick={handleClick} className="save-data">
    //   Submit Form
    // </button>

    <form onSubmit={handleClick}>
      <textarea id="totalUserData" name="totalUserData" hidden />
      <input type="text" name="fullName" hidden id="fullName" />
      <button type="submit" className="save-data">Send Mail</button>
    </form>
  );
}