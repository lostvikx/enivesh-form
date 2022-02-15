import React from "react";
import { totalUserData } from "./Form";

const handleClick = async (evt) => {

  evt.preventDefault();

  console.log(totalUserData);

  const res = await fetch("/user-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(totalUserData)
  });

  const data = await res.json();

  console.log("Data saved to DB 🎉");

  console.log(data);

}

export default function SendBtn() {
  return (
    <button onClick={handleClick}>
      Send Info To DataBase
    </button>
  );
}