import React from "react";

const handleClick = async (evt) => {
  evt.preventDefault();

  console.log("Data saved to DB 🎉");

  // const res = await fetch("http:localhost:8080/api/user-data", {
  // })

}

export default function SendBtn() {
  return <button onClick={handleClick}>Send Info To DB</button>
}