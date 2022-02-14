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
  ],
  investments: [
    {
      key: 1,
      labelName: "Mutual Funds",
      labelFor: "mutual-funds",
      inputType: "number",
      inputName: "mutualFunds"
    },
    {
      key: 2,
      labelName: "Equity Shares",
      labelFor: "equity-shares",
      inputType: "number",
      inputName: "equityShares"
    },
    {
      key: 3,
      labelName: "Other Investments",
      labelFor: "other-investments",
      inputType: "number",
      inputName: "otherInvestments"
    }
  ],
  fixedAssets: [
    {
      key: 1,
      labelName: "Principal Residence",
      labelFor: "principal-residence",
      inputType: "number",
      inputName: "principalResidence"
    },
    {
      key: 2,
      labelName: "Other Properties",
      labelFor: "other-properties",
      inputType: "number",
      inputName: "otherProperties"
    },
    {
      key: 3,
      labelName: "Car",
      labelFor: "car",
      inputType: "number",
      inputName: "car"
    },
    {
      key: 4,
      labelName: "Furnishings & Contents",
      labelFor: "furnishings-contents",
      inputType: "number",
      inputName: "furnishingsContents"
    },
    {
      key: 5,
      labelName: "Jewellery",
      labelFor: "jewellery",
      inputType: "number",
      inputName: "jewellery"
    },
    {
      key: 6,
      labelName: "Other Fixed Assets",
      labelFor: "other-fixed-assets",
      inputType: "number",
      inputName: "otherFixedAssets"
    }
  ],
  otherAssets: [
    {
      key: 1,
      labelName: "Loans Given",
      labelFor: "loans-given",
      inputType: "number",
      inputName: "loansGiven"
    },
    {
      key: 2,
      labelName: "Other Investments",
      labelFor: "other-investments",
      inputType: "number",
      inputName: "otherInvestments"
    },
    {
      key: 3,
      labelName: "Non Liquid",
      labelFor: "non-liquid",
      inputType: "number",
      inputName: "nonLiquid"
    },
  ],
  lifeInsurance: [
    {
      key: 1,
      labelName: "Term | ULIP | Traditional",
      labelFor: "term-plan",
      inputType: "number",
      inputName: "termPlan"
    },
    {
      key: 2,
      labelName: "Insurance Company",
      labelFor: "insurance-company",
      inputType: "text",
      inputName: "insuranceCompany"
    },
    {
      key: 3,
      labelName: "Insured",
      labelFor: "insured",
      inputType: "select",
      inputName: "insured",
      options: ["Yes", "No"]
    },
    {
      key: 4,
      labelName: "Start Date",
      labelFor: "insurace-start-date",
      inputType: "date",
      inputName: "insuraceStartDate"
    },
    {
      key: 5,
      labelName: "Annual Premium",
      labelFor: "insurance-annual-premium",
      inputType: "number",
      inputName: "insuranceAnnualPremium"
    },
    {
      key: 6,
      labelName: "Sum Assured",
      labelFor: "insurance-sum-assured",
      inputType: "number",
      inputName: "insuranceSumAssured"
    },
    {
      key: 7,
      labelName: "Death Benefit",
      labelFor: "death-benefit",
      inputType: "number",
      inputName: "deathBenefit"
    },
  ],
  mediclaim: [
    {
      key: 1,
      labelName: "Floater | Individual | Critical Illness",
      labelFor: "critical-illness",
      inputType: "text",
      inputName: "criticalIllness"
    },
    {
      key: 2,
      labelName: "Insurance Company",
      labelFor: "mediclaim-insurance-company",
      inputType: "text",
      inputName: "mediclaimInsuranceCompany"
    },
    {
      key: 3,
      labelName: "Start Date",
      labelFor: "mediclaim-start-date",
      inputType: "date",
      inputName: "mediclaimStartDate"
    },
    {
      key: 4,
      labelName: "Annual Permium",
      labelFor: "annual-permium",
      inputType: "number",
      inputName: "annualPermium"
    },
    {
      key: 5,
      labelName: "Sum Assured",
      labelFor: "mediclaim-sum-assured",
      inputType: "number",
      inputName: "mediclaimSumAssured"
    },
  ],
  childrenEducation: [],
  pensionIncome: [],
  otherIncome: [],
  rentalRealEstate: [],
  personalExpenses: [],
  largeExpenditure: []
};

export default fields;