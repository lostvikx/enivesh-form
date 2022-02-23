const fields = {
  personalInfo: [
    {
      labelName: "First Name",
      inputType: "text",
      inputName: "firstName"
    },
    {
      labelName: "Last Name",
      inputType: "text",
      inputName: "lastName"
    },
    {
      labelName: "Date of Birth",
      inputType: "date",
      inputName: "dob"
    },
    {
      labelName: "Gender",
      inputType: "select",
      inputName: "gender",
      options: ["Male", "Female", "Other"]
    },
    {
      labelName: "Smoker",
      inputType: "select",
      inputName: "smoker",
      options: ["No", "Yes"]
    },
    {
      labelName: "Marital Status",
      inputType: "select",
      inputName: "maritalStatus",
      options: ["Married", "Unmarried"]
    },
    {
      labelName: "Date of Marriage",
      inputType: "date",
      inputName: "dateOfMarriage"
    },
    {
      labelName: "Desired Retirement Age",
      inputType: "number",
      inputName: "desiredRetirementAge"
    },
    {
      labelName: "Life Expectancy Age",
      inputType: "number",
      inputName: "lifeExpectancyAge"
    },
    {
      labelName: "Home Address",
      inputType: "text",
      inputName: "homeAddress"
    },
    {
      labelName: "City",
      inputType: "text",
      inputName: "city"
    },
    {
      labelName: "Phone Number",
      inputType: "number",
      inputName: "phoneNumber"
    },
    {
      labelName: "Email",
      inputType: "email",
      inputName: "email"
    },
    {
      labelName: "Employer",
      inputType: "text",
      inputName: "employer"
    },
    {
      labelName: "Designation",
      inputType: "text",
      inputName: "designation"
    },
  ],
  liquidAssets: [
    {
      labelName: "Bank Account",
      inputType: "number",
      inputName: "bankBal"
    },
    {
      labelName: "Cash Bank FD's",
      inputType: "number",
      inputName: "bankFd"
    }
  ],
  investments: [
    {
      labelName: "Mutual Funds",
      inputType: "number",
      inputName: "mutualFunds"
    },
    {
      labelName: "Equity Shares",
      inputType: "number",
      inputName: "equityShares"
    },
    {
      labelName: "Other Investments",
      inputType: "number",
      inputName: "otherInvestments"
    }
  ],
  fixedAssets: [
    {
      labelName: "Principal Residence",
      inputType: "number",
      inputName: "principalResidence"
    },
    {
      labelName: "Other Properties",
      inputType: "number",
      inputName: "otherProperties"
    },
    {
      labelName: "Car",
      inputType: "number",
      inputName: "car"
    },
    {
      labelName: "Furnishings & Contents",
      inputType: "number",
      inputName: "furnishingsContents"
    },
    {
      labelName: "Jewellery",
      inputType: "number",
      inputName: "jewellery"
    },
    {
      labelName: "Other Fixed Assets",
      inputType: "number",
      inputName: "otherFixedAssets"
    }
  ],
  otherAssets: [
    {
      labelName: "Loans Given",
      inputType: "number",
      inputName: "loansGiven"
    },
    {
      labelName: "Other Investments",
      inputType: "number",
      inputName: "otherInvestments"
    },
    {
      labelName: "Non Liquid",
      inputType: "number",
      inputName: "nonLiquid"
    },
  ],
  liabilities: [
    {
      labelName: "Mortgage on Home",
      inputType: "number",
      inputName: "mortgageHome"
    },
    {
      labelName: "Interest on Mortage",
      inputType: "number",
      inputName: "mortgageInterest"
    },
    {
      labelName: "Mortage Monthly Payment",
      inputType: "number",
      inputName: "mortgagePayment"
    },
    {
      labelName: "Mortage Term",
      inputType: "number",
      inputName: "mortgageTerm"
    },
    {
      labelName: "Car Loans",
      inputType: "number",
      inputName: "carLoans"
    },
    {
      labelName: "Interest on Car",
      inputType: "number",
      inputName: "carInterest"
    },
    {
      labelName: "Car Monthly Payment",
      inputType: "number",
      inputName: "carPayment"
    },
    {
      labelName: "Car Loan Term",
      inputType: "number",
      inputName: "carLoanTerm"
    },
    {
      labelName: "Creditors",
      inputType: "number",
      inputName: "creditors"
    },
    {
      labelName: "Interest on Creditors",
      inputType: "number",
      inputName: "creditorsInterest"
    },
    {
      labelName: "Creditors Monthly Payment",
      inputType: "number",
      inputName: "creditorsPayment"
    },
    {
      labelName: "Creditors Term",
      inputType: "number",
      inputName: "creditorsTerm"
    },
    {
      labelName: "Investment Loan",
      inputType: "number",
      inputName: "investmentLoans"
    },
    {
      labelName: "Interest on Investment Loan",
      inputType: "number",
      inputName: "investmentInterest"
    },
    {
      labelName: "Investment Loan Monthly Payment",
      inputType: "number",
      inputName: "investmentPayment"
    },
    {
      labelName: "Investment Loan Term",
      inputType: "number",
      inputName: "investmentTerm"
    },
    {
      labelName: "Private/Family Loans",
      inputType: "number",
      inputName: "privateLoans"
    },
    {
      labelName: "Interest on Private Loan",
      inputType: "number",
      inputName: "privateInterest"
    },
    {
      labelName: "Private Loan Monthly Payment",
      inputType: "number",
      inputName: "privatePayment"
    },
    {
      labelName: "Private Loan Term",
      inputType: "number",
      inputName: "privateTerm"
    },
    {
      labelName: "Other Liabilities",
      inputType: "number",
      inputName: "otherLiabilities"
    },
    {
      labelName: "Interest on Other Liabilities",
      inputType: "number",
      inputName: "otherInterest"
    },
    {
      labelName: "Other Liabilities Monthly Payment",
      inputType: "number",
      inputName: "otherPayment"
    },
    {
      labelName: "Other Liabilities Term",
      inputType: "number",
      inputName: "otherTerm"
    },
  ],
  lifeInsurance: [
    {
      labelName: "Term | ULIP | Traditional",
      inputType: "number",
      inputName: "termPlan"
    },
    {
      labelName: "Insurance Company",
      inputType: "text",
      inputName: "insuranceCompany"
    },
    {
      labelName: "Insured",
      inputType: "select",
      inputName: "insured",
      options: ["Yes", "No"]
    },
    {
      labelName: "Start Date",
      inputType: "date",
      inputName: "insuraceStartDate"
    },
    {
      labelName: "Annual Premium",
      inputType: "number",
      inputName: "insuranceAnnualPremium"
    },
    {
      labelName: "Sum Assured",
      inputType: "number",
      inputName: "insuranceSumAssured"
    },
    {
      labelName: "Death Benefit",
      inputType: "number",
      inputName: "deathBenefit"
    },
  ],
  mediclaim: [
    {
      labelName: "Floater | Individual | Critical Illness",
      inputType: "text",
      inputName: "criticalIllness"
    },
    {
      labelName: "Insurance Company",
      inputType: "text",
      inputName: "mediclaimInsuranceCompany"
    },
    {
      labelName: "Start Date",
      inputType: "date",
      inputName: "mediclaimStartDate"
    },
    {
      labelName: "Annual Permium",
      inputType: "number",
      inputName: "annualPermium"
    },
    {
      labelName: "Sum Assured",
      inputType: "number",
      inputName: "mediclaimSumAssured"
    },
  ],
  childrenEducation: [
    {
      labelName: "Name",
      inputType: "text",
      inputName: "childName"
    },
    {
      labelName: "Birth Date",
      inputType: "date",
      inputName: "childBirthDate"
    },
    {
      labelName: "Year of College",
      inputType: "number",
      inputName: "yearCollege"
    },
    {
      labelName: "Course Fee",
      inputType: "number",
      inputName: "childCourseFee"
    },
  ],
  pensionIncome: [
    {
      labelName: "Name",
      inputType: "text",
      inputName: "pensionName"
    },
    {
      labelName: "Company Providing Benefit",
      inputType: "text",
      inputName: "pensionCompany"
    },
    {
      labelName: "Monthly Benefit",
      inputType: "number",
      inputName: "pensionMonthlyBenefit"
    },
    {
      labelName: "Cost of Living Adjustment",
      inputType: "number",
      inputName: "pensionCostOfLivingAdj"
    },
    {
      labelName: "Amount of Lump Sum",
      inputType: "number",
      inputName: "pensionLumpSum"
    },
  ],
  otherIncome: [
    {
      labelName: "Name",
      inputType: "text",
      inputName: "otherIncomeName"
    },
    {
      labelName: "Income Description",
      inputType: "text",
      inputName: "icomeDescription"
    },
    {
      labelName: "Annual Amount",
      inputType: "number",
      inputName: "annualAmount"
    },
    {
      labelName: "Annual Increase/Decrease",
      inputType: "number",
      inputName: "annualChange"
    },
    {
      labelName: "Beginning Age",
      inputType: "date",
      inputName: "beginningAge"
    },
    {
      labelName: "Ending Age",
      inputType: "date",
      inputName: "endingAge"
    },
  ],
  rentalRealEstate: [
    {
      labelName: "Property Name",
      inputType: "text",
      inputName: "propertyName"
    },
    {
      labelName: "City",
      inputType: "text",
      inputName: "propertyCity"
    },
    {
      labelName: "Purchase Price",
      inputType: "number",
      inputName: "propertyPurchasePrice"
    },
    {
      labelName: "Current Market Value",
      inputType: "number",
      inputName: "propertyMarketValue"
    },
    {
      labelName: "Annual Rent",
      inputType: "number",
      inputName: "propertyAnnualRent"
    },
  ],
  personalExpenses: [
    {
      labelName: "Rent",
      inputType: "number",
      inputName: "rentExpenses"
    },
    {
      labelName: "Groceries & Household Supplies",
      inputType: "number",
      inputName: "groceryExpenses"
    },
    {
      labelName: "Eating Out",
      inputType: "number",
      inputName: "eatingOutExpenses"
    },
    {
      labelName: "Utilities",
      inputType: "number",
      inputName: "utilitiesExpenses"
    },
    {
      labelName: "Mobile Network Services",
      inputType: "number",
      inputName: "mobileNetworkExpenses"
    },
    {
      labelName: "Fuel (for automobiles)",
      inputType: "number",
      inputName: "fuelExpenses"
    },
    {
      labelName: "Automobile Maintenance",
      inputType: "number",
      inputName: "automobiileMaintenanceExpenses"
    },
    {
      labelName: "Activities/Recreation",
      inputType: "number",
      inputName: "recreationExpenses"
    },
    {
      labelName: "Day Care",
      inputType: "number",
      inputName: "dayCareExpenses"
    },
    {
      labelName: "Gifts",
      inputType: "number",
      inputName: "giftExpenses"
    },
    {
      labelName: "Domestic Help",
      inputType: "number",
      inputName: "domesticHelpExpenses"
    },
    {
      labelName: "Clothing",
      inputType: "number",
      inputName: "clothingExpenses"
    },
    {
      labelName: "Home Maintenance",
      inputType: "number",
      inputName: "homeMaintenanceExpenses"
    },
    {
      labelName: "Home Furnishing",
      inputType: "number",
      inputName: "homeFurnishingExpenses"
    },
    {
      labelName: "Child Support",
      inputType: "number",
      inputName: "childSupportExpenses"
    },
    {
      labelName: "Alimony",
      inputType: "number",
      inputName: "alimonyExpenses"
    },
    {
      labelName: "Entertainment",
      inputType: "number",
      inputName: "entertainmentExpenses"
    },
    {
      labelName: "Vacation",
      inputType: "number",
      inputName: "vacationExpenses"
    },
    {
      labelName: "Hobbies",
      inputType: "number",
      inputName: "hobbiesExpenses"
    },
    {
      labelName: "Gym Membership",
      inputType: "number",
      inputName: "gymMembershipExpenses"
    },
    {
      labelName: "Subscriptions (Eg: Netflix)",
      inputType: "number",
      inputName: "subscriptionExpenses"
    },
    {
      labelName: "Pet Expenses",
      inputType: "number",
      inputName: "petExpenses"
    },
    {
      labelName: "Books/Movies",
      inputType: "number",
      inputName: "booksMoviesExpenses"
    },
    {
      labelName: "Cable TV",
      inputType: "number",
      inputName: "tvExpenses"
    },
    {
      labelName: "Internet",
      inputType: "number",
      inputName: "internetExpenses"
    },
    {
      labelName: "Haircuts & Beauty",
      inputType: "number",
      inputName: "beautyExpenses"
    },
    {
      labelName: "Miscellaneous",
      inputType: "number",
      inputName: "miscellaneousExpenses"
    },
  ],
  largeExpenditure: [
    {
      labelName: "Expense",
      inputType: "text",
      inputName: "expenseName"
    },
    {
      labelName: "Cost",
      inputType: "number",
      inputName: "expenseCost"
    },
    {
      labelName: "Year (when the cost will occur)",
      inputType: "month",
      inputName: "expenseYear"
    },
    {
      labelName: "Frequency",
      inputType: "number",
      inputName: "expenseFrequency"
    },
  ]
};

export default fields;