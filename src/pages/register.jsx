import React from 'react'
import NavBar from '../components/navBar/Navbar'
import Register from '../components/register/register.js'

export default function RegisterPage() {
    return (
        <>
          <NavBar />
            <section>
                <Register />
            </section>
        </>
    )
}
