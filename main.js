"use strict";

// TODO: notify after data saved

const forms = document.querySelectorAll(".input-form");
const counts = document.querySelectorAll(".count");
const submitQuestionnaire = document.getElementById("submit-questionnaire");

// the total user data generated
// global variable
// !Important: boolean values in this ds are in strings, don't forget to convert them! 
const totalUserData = {
  // personalInfo: [],
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

for (const [index, form] of forms.entries()) {

  const count = counts[index] || null;

  let individualCount = 1;
  
  if (count !== null) {
    const countText = Number(count.textContent);
    if (isNaN(countText)) {
      individualCount = count.textContent;
    }
  }

  // console.log(individualCount);

  // saves an userData obj in the totalUserData
  // params: evt: on-submit event, form: form Element, count: span count element, individualCount: number or string (count span text content)
  form.addEventListener("submit", evt => {

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

    if (totalUserData[`${form.id}`] == null || totalUserData[`${form.id}`] == undefined) {
      totalUserData[`${form.id}`] = [];
    }

    totalUserData[`${form.id}`].push(userData);
    console.log(totalUserData);

    // visual change part
    if (count !== null && !isNaN(individualCount)) {
      individualCount++;
      count.textContent = individualCount;
    }

    if (count !== null && typeof individualCount == "string") {
      console.log("individualCount is string")

      switch (individualCount) {
        case "Self":
          individualCount = "Spouse";
          break;
      
        default:
          individualCount = "Other";
          break;
      }

      count.textContent = individualCount;
    }

    form.reset();

    // TODO: give user message 
    console.log("data saved!");

    // // requires a server to test
    // const res = await fetch("/form-data", {
    //   method: "POST",
    //   body: userData
    // });

    // const data = await res.json()
    // console.log(data);
  });

}

// enable/disable date of marriage in personal-info form
const maritalStatus = document.getElementById("marital-status");
const marriageDate = document.getElementById("marriage-date");

maritalStatus.addEventListener("change", (evt) => {
  evt.preventDefault();
  if (maritalStatus.value == "true") {
    marriageDate.disabled = false;
  } else {
    marriageDate.disabled = true;
  }
});

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