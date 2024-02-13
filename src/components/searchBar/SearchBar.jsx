import React from "react";
import Heading from "./Heading";
import '../searchBar/SearchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import useAPI from "../../effects/useAPI";
import getAllProperties from "../../services/getAllProperties";
import getPropertyTypes from "../../services/getPropertyTypes";
import { useNavigate } from 'react-router-dom';



export default function SearchBar(){
    
    const [loading, error, response ] = useAPI(() => getAllProperties());
    const [loading2, error2,response2] = useAPI(() => getPropertyTypes());
    const navigate = useNavigate();

    // eslint-disable-next-line no-sequences
    if(error, error2){
        return <div>Something went wrong</div>
      // eslint-disable-next-line no-sequences
      }if(loading, loading2){
        return <div>Loading...</div>
      }
    
    const { properties } = response;
    const { property_types } = response2
    return (
        <>
        <div className="searchbar">
            <div className="container1">
                <Heading title="Search for your dream home" />
                <form className="flex">
                <div className="box">
                    <span>City/Street</span>
                    <select id="cities" className="custom-select" defaultValue="">
                    <option value="" disabled hidden>Pick your city</option>
                    {properties.map((property)=> {
                        return (
                                <>
                                <option value={property.location}>{property.location}</option>
                                </>
                            )
                        })}
                    </select>
                </div>

                <div className="box">
                    <span>Property Type</span>
                    <select id="property-types" className="custom-select" defaultValue="">
                    <option value="" disabled hidden>Property Type</option>
                    {property_types.map((property_type, index)=> {
                        return (
                                <>
                                <option key={index} value={property_type.propertyType}>{property_type.propertyType}</option>
                                </>
                            )
                        })}
                    </select>
                </div>

                <div className="box">
                    <span>Price Range</span>
                    <select id="prices" className="custom-select" defaultValue="">
                    <option value="" disabled hidden>Price Range</option>
                    {properties.map((property)=> {
                        return (
                                <>
                                <option value={property.price}>{property.price}</option>
                                </>
                            )
                        })}
                    </select>
                </div>

                <button className="btn"  onClick={() => navigate('/view-properties')} >
                <FontAwesomeIcon icon={faCircleDot} style={{ marginRight: '10px' }} />Search
                </button>
                </form>
                </div>
            </div>
        </>
    )
}
