import React from "react";
import { totalUserData } from "./Form";

const handleClick = async (evt) => {

  evt.preventDefault();

  console.log("Data saved to DB 🎉");

  // const res = await fetch("http:localhost:8080/user-data", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(totalUserData)
  // });

  // const data = await res.json();

  console.log(totalUserData);

}

export default function SendBtn() {
  return (
    <button onClick={handleClick}>
      Send Info To DataBase
    </button>
  );
}