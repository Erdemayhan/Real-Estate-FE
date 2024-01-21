import React from "react";
import InputField from "./inputFields";

function General() {
  return (
    <>
      <InputField
        type="text"
        label="Username"
        id="username"
        changeFunction={(e) => {
          console.log(e.target.value);
        }}
        className="col-5"
        placeholder="Hazan"
      />
      <InputField
        type="email"
        label="email"
        id="email"
        changeFunction={(e) => {
          console.log(e.target.value);
        }}
        className="col-5 offset-1"
        placeholder="Hazan@gmail.com"
      />
    </>
  );
}

export default General;
