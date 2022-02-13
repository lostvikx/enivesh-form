const fields = [
  {
    id: 1,
    labelName: "First Name",
    labelFor: "first-name",
    inputType: "text",
    inputName: "firstName"
  },
  {
    id: 2,
    labelName: "Last Name",
    labelFor: "last-name",
    inputType: "text",
    inputName: "lastName"
  },
  {
    id: 3,
    labelName: "Date of Birth",
    labelFor: "dob",
    inputType: "date",
    inputName: "dob"
  },
  {
    id: 4,
    labelName: "Gender",
    labelFor: "gender",
    inputType: "select",
    inputName: "gender",
    options: ["Male", "Female", "Other"]
  }
];

export default fields;