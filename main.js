"use strict";

// TODO: notify after data saved

const form = document.getElementById("input-form");
const count = document.getElementById("indi-count");
const submitQuestionnaire = document.getElementById("submit-questionnaire");

// the total user data generated
const totalUserData = {
  personalInfo: [],
  // assetsLiab: [],
  // lifeInsurance: [],
  // mediclaim: [],
  // childEdu: [],
  // pensionIncome: [],
  // otherIncome: [],
  // rentalRealEstate: [],
  // personalExp: [],
  // largeExp: []
};

let individualCount = 1;
count.textContent = individualCount;

const saveData = (evt) => {

  evt.preventDefault();

  const userData = {};

  // gets the entire data from the input-form
  const formData = new FormData(form);

  // adds the form data to the userData object
  for (const data of formData) {
    const label = data[0];
    const value = data[1];
    userData[label] = value;
  }

  // console.log(userData);

  totalUserData.personalInfo.push(userData);
  console.log(totalUserData);

  // visual change
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

form.addEventListener("submit", evt => saveData(evt));

// submit the entire questionnaire
submitQuestionnaire.addEventListener("click", evt => {
  
  evt.preventDefault();

  // work on this later
  // if (totalUserData.personalInfo.length < 1) {
  //   alert("Please fill out the form for atleast 1 individual!");
  // } else {
  //   // http redirect
  //   window.location.replace("https://gitbub.com/lostvikx");
  // }

});

// enable/disable date of marriage form input
const maritalStatus = document.getElementById("marital-status");
const marriageDate = document.getElementById("marriage-date");

maritalStatus.addEventListener("change", (evt) => {
  evt.preventDefault();
  if (maritalStatus.value == "true") {
    marriageDate.disabled = false;
  } else {
    marriageDate.disabled = true;
  }
})