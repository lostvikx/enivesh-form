const fields = {
  personalInfo: [
    {
      key: 1,
      labelName: "First Name",
      inputType: "text",
      inputName: "firstName"
    },
    {
      key: 2,
      labelName: "Last Name",
      inputType: "text",
      inputName: "lastName"
    },
    {
      key: 3,
      labelName: "Date of Birth",
      inputType: "date",
      inputName: "dob"
    },
    {
      key: 4,
      labelName: "Gender",
      inputType: "select",
      inputName: "gender",
      options: ["Male", "Female", "Other"]
    },
    {
      key: 5,
      labelName: "Smoker",
      inputType: "select",
      inputName: "smoker",
      options: ["No", "Yes"]
    },
    {
      key: 6,
      labelName: "Marital Status",
      inputType: "select",
      inputName: "maritalStatus",
      options: ["Married", "Unmarried"]
    },
    {
      key: 7,
      labelName: "Date of Marriage",
      inputType: "date",
      inputName: "dateOfMarriage"
    },
    {
      key: 8,
      labelName: "Desired Retirement Age",
      inputType: "number",
      inputName: "desiredRetirementAge"
    },
    {
      key: 9,
      labelName: "Life Expectancy Age",
      inputType: "number",
      inputName: "lifeExpectancyAge"
    },
    {
      key: 10,
      labelName: "Home Address",
      inputType: "text",
      inputName: "homeAddress"
    },
    {
      key: 11,
      labelName: "City",
      inputType: "text",
      inputName: "city"
    },
    {
      key: 12,
      labelName: "Phone Number",
      inputType: "number",
      inputName: "phoneNumber"
    },
    {
      key: 13,
      labelName: "Email",
      inputType: "email",
      inputName: "email"
    },
    {
      key: 14,
      labelName: "Employer",
      inputType: "text",
      inputName: "employer"
    },
    {
      key: 15,
      labelName: "Designation",
      inputType: "text",
      inputName: "designation"
    },
  ],
  liquidAssets: [
    {
      key: 1,
      labelName: "Bank Account",
      inputType: "number",
      inputName: "bankBal"
    },
    {
      key: 2,
      labelName: "Cash Bank FD's",
      inputType: "number",
      inputName: "bankFd"
    }
  ],
  investments: [
    {
      key: 1,
      labelName: "Mutual Funds",
      inputType: "number",
      inputName: "mutualFunds"
    },
    {
      key: 2,
      labelName: "Equity Shares",
      inputType: "number",
      inputName: "equityShares"
    },
    {
      key: 3,
      labelName: "Other Investments",
      inputType: "number",
      inputName: "otherInvestments"
    }
  ],
  fixedAssets: [
    {
      key: 1,
      labelName: "Principal Residence",
      inputType: "number",
      inputName: "principalResidence"
    },
    {
      key: 2,
      labelName: "Other Properties",
      inputType: "number",
      inputName: "otherProperties"
    },
    {
      key: 3,
      labelName: "Car",
      inputType: "number",
      inputName: "car"
    },
    {
      key: 4,
      labelName: "Furnishings & Contents",
      inputType: "number",
      inputName: "furnishingsContents"
    },
    {
      key: 5,
      labelName: "Jewellery",
      inputType: "number",
      inputName: "jewellery"
    },
    {
      key: 6,
      labelName: "Other Fixed Assets",
      inputType: "number",
      inputName: "otherFixedAssets"
    }
  ],
  otherAssets: [
    {
      key: 1,
      labelName: "Loans Given",
      inputType: "number",
      inputName: "loansGiven"
    },
    {
      key: 2,
      labelName: "Other Investments",
      inputType: "number",
      inputName: "otherInvestments"
    },
    {
      key: 3,
      labelName: "Non Liquid",
      inputType: "number",
      inputName: "nonLiquid"
    },
  ],
  lifeInsurance: [
    {
      key: 1,
      labelName: "Term | ULIP | Traditional",
      inputType: "number",
      inputName: "termPlan"
    },
    {
      key: 2,
      labelName: "Insurance Company",
      inputType: "text",
      inputName: "insuranceCompany"
    },
    {
      key: 3,
      labelName: "Insured",
      inputType: "select",
      inputName: "insured",
      options: ["Yes", "No"]
    },
    {
      key: 4,
      labelName: "Start Date",
      inputType: "date",
      inputName: "insuraceStartDate"
    },
    {
      key: 5,
      labelName: "Annual Premium",
      inputType: "number",
      inputName: "insuranceAnnualPremium"
    },
    {
      key: 6,
      labelName: "Sum Assured",
      inputType: "number",
      inputName: "insuranceSumAssured"
    },
    {
      key: 7,
      labelName: "Death Benefit",
      inputType: "number",
      inputName: "deathBenefit"
    },
  ],
  mediclaim: [
    {
      key: 1,
      labelName: "Floater | Individual | Critical Illness",
      inputType: "text",
      inputName: "criticalIllness"
    },
    {
      key: 2,
      labelName: "Insurance Company",
      inputType: "text",
      inputName: "mediclaimInsuranceCompany"
    },
    {
      key: 3,
      labelName: "Start Date",
      inputType: "date",
      inputName: "mediclaimStartDate"
    },
    {
      key: 4,
      labelName: "Annual Permium",
      inputType: "number",
      inputName: "annualPermium"
    },
    {
      key: 5,
      labelName: "Sum Assured",
      inputType: "number",
      inputName: "mediclaimSumAssured"
    },
  ],
  childrenEducation: [
    {
      key: 1,
      labelName: "Name",
      inputType: "text",
      inputName: "childName"
    },
    {
      key: 2,
      labelName: "Birth Date",
      inputType: "date",
      inputName: "childBirthDate"
    },
    {
      key: 3,
      labelName: "Year of College",
      inputType: "number",
      inputName: "yearCollege"
    },
    {
      key: 4,
      labelName: "Course Fee",
      inputType: "date",
      inputName: "childCourseFee"
    },
  ],
  pensionIncome: [
    {
      key: 1,
      labelName: "Name",
      inputType: "text",
      inputName: "pensionName"
    },
    {
      key: 2,
      labelName: "Company Providing Benefit",
      inputType: "text",
      inputName: "pensionCompany"
    },
    {
      key: 3,
      labelName: "Monthly Benefit",
      inputType: "number",
      inputName: "pensionMonthlyBenefit"
    },
    {
      key: 4,
      labelName: "Cost of Living Adjustment",
      inputType: "number",
      inputName: "pensionCostOfLivingAdj"
    },
    {
      key: 5,
      labelName: "Amount of Lump Sum",
      inputType: "number",
      inputName: "pensionLumpSum"
    },
  ],
  otherIncome: [
    {
      key: 1,
      labelName: "Name",
      inputType: "text",
      inputName: "otherIncomeName"
    },
    {
      key: 2,
      labelName: "Income Description",
      inputType: "text",
      inputName: "icomeDescription"
    },
    {
      key: 3,
      labelName: "Annual Amount",
      inputType: "number",
      inputName: "annualAmount"
    },
    {
      key: 4,
      labelName: "Annual Increase/Decrease",
      inputType: "number",
      inputName: "annualChange"
    },
    {
      key: 5,
      labelName: "Beginning Age",
      inputType: "date",
      inputName: "beginningAge"
    },
    {
      key: 6,
      labelName: "Ending Age",
      inputType: "date",
      inputName: "endingAge"
    },
  ],
  rentalRealEstate: [],
  personalExpenses: [],
  largeExpenditure: []
};

export default fields;