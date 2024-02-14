import React from "react";
import "./LoginSignUp.css";
import { useState } from "react";
import postuserById from "../../services/postUserById";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFail, setLoginFail] = useState(false);

  const handleSignOut = async (event) => {
    event.preventDefault();
    setLoginFail(false);

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await postuserById({ email, password });
      console.log("Response:", response.data.accessToken);
      localStorage.setItem("token", response.data.accessToken);
      navigate("/");
    } catch (error) {
      setLoginFail(true);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSignOut}>
        {action === "Sign Up" ? null : (
          <div className="input">
            <input type="username" placeholder="Username" />{" "}
          </div>
        )}
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">{action}</button>
      </form>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Forget your password?<span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            setAction(action === "Login" ? "Sign Up" : "Login");
          }}
        >
          {action === "Login" ? "Sign Up" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
