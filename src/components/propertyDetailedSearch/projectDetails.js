import React, { useState } from "react";
import "./projectDetails.css";
import Heading from "../searchBar/Heading";
import useAPI from "../../effects/useAPI";
import getPropertyByLocation from "../../services/getPropertyByLocation";
import getLocations from "../../services/getLocations";

const PropertyDetails = () => {
  const [location, setLocation] = useState("");
  const [propertyResults, setPropertyResults] = useState([{}]);

  const [loadingLocations, errorLocations, responseLocations] = useAPI(() =>
    getLocations()
  );

  if (errorLocations) {
    return <div>Something went wrong</div>;
  }
  if (loadingLocations) {
    return <div>Loading...</div>;
  }

  const { locations } = responseLocations;

  const handleSubmit = async () => {
    try {
      const response = await getPropertyByLocation(location);

      setPropertyResults(response.data.property);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Heading title="View The Property You Search" />
      <div className="SearchBox">
        <label htmlFor="location" className="form-label">
        <Heading title="Locations" />
        </label>
        <select className = "dropdown" value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="" disabled hidden>Pick your city</option>
          {locations.map((property) => {
            return (
              <option value={property.location}>{property.location}</option>
            );
          })}
        </select>
        <button className="btn" type="button" onClick={() => handleSubmit()}>
          Search
        </button>
      </div>



      <div className="SearchResultBox">
        {propertyResults.map((property) => (
          <div key={property.id} className="PropertyResultBox">
            <Heading title="Search Results" />
            <div className="first">
              <p>Location : {property.location} </p>
              <p>Price : {property.price}</p>
              <p>Status : {property.status}</p>
              <p>Type : {property.type} </p>
              <p>Size square meters : {property.sizeSqMeters}</p>
              <p>No. of bedrooms : {property.noOfBedrooms}</p>
              <p>No. of bathrooms : {property.noOfBathrooms}</p>
              <p>No. of rooms : {property.noOfRooms}</p>
              <p>Listed Date : {property.listedDate} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PropertyDetails;
