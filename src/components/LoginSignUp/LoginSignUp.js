import React from "react";
import "./LoginSignUp.css";
import { useState } from "react";
import postLogin from "../../services/postLogin";
import { useNavigate } from "react-router-dom";


 const LoginSignUp = () => {
   const [action, setAction] = useState("Sign Up");
   const navigate = useNavigate();
  
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loginFail, setLoginFail] = useState(false);



   const handleSubmit = async (event) => {
     event.preventDefault(); 
     setLoginFail(false);

     console.log('Email:', email);
     console.log('Password:', password);
  
     try {
       const response = await postLogin({email, password});
       console.log('Response:', response.data.accessToken);
       localStorage.setItem('token', response.data.accessToken);
       navigate('/');
       // jwt token ı kaydet
     } catch (error) {
       setLoginFail(true);
       alert('Invalid email or password');
       console.log(error);
     }
   };

   return (
     <form onSubmit={handleSubmit}> 
     {loginFail && <div className="error">Invalid email or password</div>}
       {/* ... */}
       <div className="input">
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={e => setEmail(e.target.value)} 
         />
       </div>
       <div className="input">
         <input
           type="current-password"
           placeholder="Password"
           value={password}
           onChange={e => setPassword(e.target.value)} 
         />
       </div>
      <div>
       <button onClick={handleSubmit}>{action}</button>
     </div>
     </form>

   );
 };

 export default LoginSignUp;
