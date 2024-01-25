import React from "react";
import LoginSignUp from '../components/LoginSignUp/LoginSignUp';
import NavBar from "../components/navBar/Navbar";


export default function SignIn() {
    return (
        <>
        <NavBar />
          <section>
          <LoginSignUp />
          </section>
        </>
    )
}