import React from "react";

const handleClick = async (evt) => {

  evt.preventDefault();

  console.log("Data saved to DB 🎉");

  // const res = await fetch("http:localhost:8080/api/user-data", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(totalUserData)
  // });

  // const data = await res.json();

  // console.log(data);

}

export default function SendBtn() {
  return (
    <button onClick={handleClick}>
      Send Info To DataBase
    </button>
  );
}