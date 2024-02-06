import React from "react";
import "./LoginSignUp.css";
import { useState } from "react";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {" "}
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <input type="username" placeholder="Username" />{" "}
          </div>
        )}
        <div className="input">
          {/*FONTAWESOME IMG HERE*/}
          <input type="email" placeholder="Email" />{" "}
        </div>
        <div className="input">
          {/*FONTAWESOME IMG HERE*/}
          <input type="password" placeholder="Password" />{" "}
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forget your password?<span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
