import React from "react";
import Form from "./components/Form";
import SendBtn from "./components/SendBtn"

export default function App() {
  return (
    <>
      <div className="flex-form">
        <Form formName="Personal Info" formId="personalInfo" />
        <Form formName="Liquid Assets" formId="liquidAssets" />
        <Form formName="Investments" formId="investments" />
        <Form formName="Fixed Assets" formId="fixedAssets" />
        <Form formName="Other Assets" formId="otherAssets" />
        <Form formName="Life Insurance" formId="lifeInsurance" />
        <Form formName="Mediclaim" formId="mediclaim" />
      </div>
      <SendBtn />
    </>
  );
}