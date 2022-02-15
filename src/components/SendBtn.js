import React from "react";
import { totalUserData } from "./Form";

const handleClick = async (evt) => {

  evt.preventDefault();

  const res = await fetch("/user-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(totalUserData)
  });

  const data = await res.json();

  console.log(data);

}

export default function SendBtn() {
  return (
    <button onClick={handleClick} className="save-data">
      Send Info To DataBase
    </button>
  );
}