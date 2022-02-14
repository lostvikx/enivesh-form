const fields = {
  personalInfo: [
    {
      key: 1,
      labelName: "First Name",
      labelFor: "first-name",
      inputType: "text",
      inputName: "firstName"
    },
    {
      key: 2,
      labelName: "Last Name",
      labelFor: "last-name",
      inputType: "text",
      inputName: "lastName"
    },
    {
      key: 3,
      labelName: "Date of Birth",
      labelFor: "dob",
      inputType: "date",
      inputName: "dob"
    },
    {
      key: 4,
      labelName: "Gender",
      labelFor: "gender",
      inputType: "select",
      inputName: "gender",
      options: ["Male", "Female", "Other"]
    },
    {
      key: 5,
      labelName: "Smoker",
      labelFor: "smoker",
      inputType: "select",
      inputName: "smoker",
      options: ["No", "Yes"]
    }
  ],
  liquidAssets: [
    {
      key: 1,
      labelName: "Bank Account",
      labelFor: "bank-acc",
      inputType: "number",
      inputName: "bankBal"
    },
    {
      key: 2,
      labelName: "Cash Bank FD's",
      labelFor: "cash-bank",
      inputType: "number",
      inputName: "bankFd"
    }
  ]
};

export default fields;