import React from "react";
import Form from "./components/Form";
import SendBtn from "./components/SendBtn"

export default function App() {
  return (
    <>
      <div className="flex-form">
        <Form formName="Personal Info" formId="personalInfo" />
        <Form formName="Liquid Assets" formId="liquidAssets" />
      </div>
      <SendBtn />
    </>
  );
}