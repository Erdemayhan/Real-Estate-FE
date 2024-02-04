import React from "react";
import "./LoginSignUp.css";
import { useState } from "react";
import useAPI from "../../effects/useAPI";
import postLogin from '../../services/postLogin';

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

    const handleClick = () => {
      if (action === "Sign Up") {
        setAction("Log In");
      } else {
        setAction("Sign Up");
      }
    };
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Call postLogin with email and password
  const [loadingLogin, errorLogin, responseLogin] = useAPI(() =>
    postLogin({email, password})
  );

  if (errorLogin) {
    return <div>Something went wrong</div>;
  }
  if (loadingLogin) {
    return <div>Loading...</div>;
  }
  
const { Login } = responseLogin;
console.log(Login);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    try {
      const response = await postLogin(email, password);
      setEmail(response.data.login.email); // Set email
      setPassword(response.data.login.password); // Set password
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Call handleSubmit when the form is submitted */}
      {/* ... */}
      <div className="input">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} // Update email when the user types into the input field
        />
      </div>
      <div className="input">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} // Update password when the user types into the input field
        />
      </div>
     <div>
      <button onClick={handleClick}>{action}</button>
    </div>
    </form>
  );
};

export default LoginSignUp;