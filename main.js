"use strict";

// Testing code!
const form = document.getElementById("input-form");

// the total user data 
const totalUserData = [];

form.addEventListener("submit", async (evt) => {

  evt.preventDefault();

  const userData = {};

  const formData = new FormData(form);

  for (const data of formData) {
    const label = data[0];
    const value = data[1];
    userData[label] = value;
  }

  // console.log(userData);

  totalUserData.push(userData);

  console.log(totalUserData);

  form.reset();

  // // requires a server to test
  // const res = await fetch("/form-data", {
  //   method: "POST",
  //   body: userData
  // });

  // const data = await res.json()
  // console.log(data);

});

