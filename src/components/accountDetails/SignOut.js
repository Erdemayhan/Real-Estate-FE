import React from "react";
import "./signout.css";

const SignOut = () => {
  const handleSignOut = () => {
    // Add your sign out logic here
    console.log("Signed out");
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
