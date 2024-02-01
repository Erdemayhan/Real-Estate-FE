import React, {useState} from "react";
import "./projectDetails.css";
import Heading from "../searchBar/Heading";
import useAPI from "../../effects/useAPI";
import getPropertyByLocation from "../../services/getPropertyByLocation";

const PropertyDetails = () => {
  const [location, setLocation] = useState('');
  const [propertyResults, setPropertyResults] = useState([
    { location: 'Famagusta' },
    { location: 'Kyrenia' },
    { location: 'Omorfou' }

  ]);

  const [loading, error, response] = useAPI(() => getPropertyByLocation());
  
   if (error) {
    return <div>Something went wrong</div>;
    // eslint-disable-next-line no-sequences
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const { properties } = response;

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
        const response = await getPropertyByLocation({
          location,
        });
      
        if (Array.isArray(response.data)) {
          setPropertyResults(response.data);
        } else {
          console.error('response.data is not an array');
        }
      
        console.log(response, "response");
        
      } catch (error) {
        console.log(error);
      }
    };
  return (
   <><Heading title="View The Property You Search" /><form onSubmit={handleSubmit}>
   <form onSubmit={handleSubmit}>
      <div className="box">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="" disabled hidden>
            Pick your city
          </option>
          {properties.map((property) => {
            return (
              <React.Fragment key={property.id}>
                <option value={property.location}>
                  {property.location}
                </option>
              </React.Fragment>
            );
          })}
        </select>
      </div>
      <div className="box">
        <button className="btn" type="submit" onClick={handleSubmit} onChange={handleLocationChange}>
  Search
</button>
</div>
</form>
    <div className="container 2">
        {propertyResults.map((property) => (
          <div key={property.id} className="propertyContainer">
            <h1>Property Information</h1>
            <div className="first">
              <p>Location : {property.location} </p>
              <p>Price : 500,000 {property.price}</p>
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
      </form>
      </>
  );
}
export default PropertyDetails;
