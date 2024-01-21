import React from "react";
import Features from "../components/features/Features";
import Header from "../components/header/Header";
import NavBar from "../components/navBar/Navbar";
import PropertyTypes from "../components/property-types/PropertyTypes";
import SearchBar from "../components/searchBar/SearchBar";
import './homePage.css'

export default function HomePage() {
    return (
        <>
            <NavBar />
            
            <main>
            <Header />
            <SearchBar />
            </main>
            <Features />
            <PropertyTypes />
        </>
    )
}