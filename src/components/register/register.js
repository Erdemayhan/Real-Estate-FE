import postUser from "../../services/postUser";
import Heading from "../searchBar/Heading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerFail, setRegisterFail] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegisterFail(false);
    try {
      const response = await postUser({ username, email, password });
      console.log("Response:", response.data);
      navigate("/");
    } catch (error) {
      setRegisterFail(true);
      alert("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <form className="Register" onSubmit={handleSubmit}>
      {registerFail && <div className="error">Invalid email or password</div>}
      <Heading title="Register" />
      <div className="input">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
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
          type="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="RegisterBut" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Register;
