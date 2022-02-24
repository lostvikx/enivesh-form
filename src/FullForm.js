import React from "react";
import { Form } from "./components/Form";
import SendBtn from "./components/SendBtn";

const hiddenStyle = {
  visibility: "hidden"
};

export default function FullForm() {
  return (
    <main>
      <div id="save-message" style={hiddenStyle}></div>
      <div className="flex-form">
        <Form formName="Personal Info" formId="personalInfo" self={true} />
        <Form formName="Liquid Assets" formId="liquidAssets" self={true} />
        <Form formName="Investments" formId="investments" self={true} />
        <Form formName="Fixed Assets" formId="fixedAssets" self={true} />
        <Form formName="Other Assets" formId="otherAssets" self={true} />
        <Form formName="Liabilities" formId="liabilities" self={true} />
        <Form formName="Life Insurance" formId="lifeInsurance" />
        <Form formName="Mediclaim" formId="mediclaim" />
        <Form formName="Children &amp; College Planning" formId="childrenEducation" />
        <Form formName="Pension Income" formId="pensionIncome" />
        <Form formName="Other Income" formId="otherIncome" />
        <Form formName="Rental Real Estate" formId="rentalRealEstate" />
        <Form formName="Personal Expenses (Monthly)" formId="personalExpenses" />
        <Form formName="Large Expenditure" formId="largeExpenditure" />
      </div>
      <SendBtn />
    </main>
  );
}