import React from "react";
import Heading from "./Heading";
import '../searchBar/SearchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar(){
    return (
        <>
            <section className="searchbar">
                <div className="container">
                    <Heading title="Search for your dream home" subtitle="Search as you type" />

                    <form className="flex">
                        <div className="box">
                            <span>City/Street</span>
                            <input type="text" placeholder="Location" />
                        </div>

                        <div className="box">
                            <span>Property Type</span>
                            <input type="text" placeholder="Property Type" />
                        </div>

                        <div className="box">
                            <span>Price Range</span>
                            <input type="text" placeholder="Price Range" />
                        </div>

                        <button className="btn">
                        <FontAwesomeIcon icon={faCircleDot} style={{ marginRight: '10px' }} />Search
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}