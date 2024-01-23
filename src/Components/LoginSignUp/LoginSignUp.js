import React from "react";
import "./LoginSignUp.css";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";
import { useState } from "react";


const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [loading, error, response] = useAPI(() => getUsers());

  if (error) {
    return <div>Error...</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  //postmandeki beklediginiz dataya gore distruct ediniz
  const { users } = response;

  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

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
            <img src={user_icon} alt="" />{" "}
            <input type="username" placeholder="Username" />{" "}
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />{" "}
          <input type="email" placeholder="Email" />{" "}
        </div>
        <div className="input">
          <img src={password_icon} alt="" />{" "}
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
      <div>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.id}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
              <p>{user.userTypeId}</p>
              <p>{user.createdAt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoginSignUp;
