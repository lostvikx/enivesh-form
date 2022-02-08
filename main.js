"use strict";

// Testing code!
const form = document.getElementById("input-form");
const addIndividual = document.getElementById("add-individual");
const count = document.getElementById("indi-count");

// the total user data 
const totalUserData = [];
let individualCount = 1;
count.textContent = individualCount;

const addAnother = (evt) => {

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
  individualCount++;
  count.textContent = individualCount;

  form.reset();

  // // requires a server to test
  // const res = await fetch("/form-data", {
  //   method: "POST",
  //   body: userData
  // });

  // const data = await res.json()
  // console.log(data);

}

addIndividual.addEventListener("click", evt => addAnother(evt));

form.addEventListener("submit", evt => {
  
  evt.preventDefault();

  console.log("next form please!")

});
