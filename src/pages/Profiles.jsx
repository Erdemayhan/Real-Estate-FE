import React from "react";
import AccountDetails from '../components/accountDetails/accountdetails';
import NavBar from "../components/navBar/Navbar";
export default function Profiles() {
    return (
        <>
            <NavBar />
            <section>
                <AccountDetails />
            </section>
        </>
    )
}