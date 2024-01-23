import React from "react";
import AccountDetails from '../components/accountDetails/accountdetails';
import LoginSignUp from '../components/LoginSignUp/LoginSignUp';

export default function Profiles() {
    return (
        <>
            <section>
                <AccountDetails />
            </section>
            <LoginSignUp />
        </>
    )
}