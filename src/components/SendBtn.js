import React from "react";

const handleClick = async (evt) => {
  evt.preventDefault();

  // const res = await fetch("http:localhost:8080/api/user-data", {
  // })

}

export default function SendBtn() {
  return <button onClick={handleClick}>Send Info To DB</button>
}