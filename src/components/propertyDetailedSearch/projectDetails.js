import React from 'react';
import './projectDetails.css';
import Heading from '../searchBar/Heading';
import useAPI from '../../effects/useAPI';
import getAllProperties from "../../services/getAllProperties";
import getPropertyTypes from "../../services/getPropertyTypes";
import getPropertyStatuses from '../../services/getPropertyStatuses';

const PropertyDetails = () => {   
  const [loading, error, response ] = useAPI(() => getAllProperties());
  const [loading2, error2,response2] = useAPI(() => getPropertyTypes());
  const [loading3, error3,response3] = useAPI(() => getPropertyStatuses());


  if(error, error2, error3){
    return <div>Something went wrong</div>
  // eslint-disable-next-line no-sequences
  }if(loading, loading2, loading3){
    return <div>Loading...</div>
  }
  const { properties } = response;
  const { property_types } = response2
  const { propertyStatuses } = response3
  
    return (
      <>
      <div className="App">
        <form>
        <Heading title="View The Property You Search" />
          <div className="form-group">
            <label htmlFor="location" className="form-label">Location</label>
            <select defaultValue="" >
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


          {/*Might need new endpoint that would display status except Off the market */}
          <div className="form-group">
            <label htmlFor="location" className="form-label">Status</label>
            <select defaultValue="" >
            <option value="" disabled hidden>Current Property Status</option>
            {propertyStatuses.map((propertyStatus, index)=> {
                return (
                        <>
                        <option key={index} value={propertyStatus.propertyStatus}>{propertyStatus.propertyStatus}</option>
                        </>
                    )
                })}
            </select>
          </div>
        
          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <select defaultValue="" >
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


          <div className="form-group">
            <label htmlFor="price" className="form-label">Property Type</label>
            <select defaultValue="" >
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
      
          <div className="form-group">
            <label htmlFor="price" className="form-label">Property Size</label>
            <select defaultValue="" >
            <option value="" disabled hidden>Property Size</option>
            {properties.map((property)=> {
                return (
                        <>
                        <option value={property.sizeSqMeters}>{property.sizeSqMeters}</option>
                        </>
                    )
                })}
            </select>
          </div>
      
          <div className="form-group">
            <label htmlFor="price" className="form-label">Number of Bedrooms</label>
            <select defaultValue="" >
            <option value="" disabled hidden>Number Of Bedrooms</option>
            {properties.map((property)=> {
                return (
                        <>
                        <option value={property.noOfBedrooms}>{property.noOfBedrooms}</option>
                        </>
                    )
                })}
            </select>
          </div>
      
          <div className="form-group">
            <label htmlFor="price" className="form-label">Number of Bathrooms</label>
            <select defaultValue="" >
            <option value="" disabled hidden>Number Of Bathrooms</option>
            {properties.map((property)=> {
                return (
                        <>
                        <option value={property.noOfBathrooms}>{property.noOfBathrooms}</option>
                        </>
                    )
                })}
            </select>
          </div>
      
          <div className="form-group">
            <label htmlFor="price" className="form-label">Number of Rooms</label>
            <select defaultValue="" >
            <option value="" disabled hidden>Number Of Rooms</option>
            {properties.map((property)=> {
                return (
                        <>
                        <option value={property.noOfRooms}>{property.noOfRooms}</option>
                        </>
                    )
                })}
            </select>
          </div>
      
          <div className="form-group">
            <label htmlFor="price" className="form-label">Listed Date</label>
            <select defaultValue="" >
            <option value="" disabled hidden>Listed Date</option>
            {properties.map((property)=> {
                return (
                        <>
                        <option value={property.listedDate}>{property.listedDate}</option>
                        </>
                    )
                })}
            </select>
          </div>

      <div className="form-group">
            <button className="btn" type="submit" >Search</button>
      </div>
        
      </form>

      <div className="container2">
            <div className="first">
                <h1>Property Information</h1>
                <h2>Location</h2> 
                <p>Famagusta</p>
                <h2>Price</h2>
                <p>£ 200,000</p>
                <h2>Status</h2>
                <p>For Sale</p>
                <h2>Type</h2>
                <p>Apartment</p>
                <h2>Size square meters</h2>
                <p>100</p>
                <h2>No. of bedrooms</h2>
                <p>2</p>
                <h2>No. of bathrooms</h2>
                <p>1</p>
                <h2>No. of rooms</h2>
                <p>3</p>
                <h2>Listed Date</h2>
                <p>2021-03-01</p>
            </div>
            <div className="second">
                <h1>Property Information</h1>
                <h2>Location</h2> 
                <p>Kyrenia</p>
                <h2>Price</h2>
                <p>£ 100,000</p>
                <h2>Status</h2>
                <p>For Rent</p>
                <h2>Type</h2>
                <p>Penthouse</p>
                <h2>Size square meters</h2>
                <p>150</p>
                <h2>No. of bedrooms</h2>
                <p>1</p>
                <h2>No. of bathrooms</h2>
                <p>1</p>
                <h2>No. of rooms</h2>
                <p>2</p>
                <h2>Listed Date</h2>
                <p>2021-03-01</p>
            </div>
      </div>

      </div>
</>
);
}

export default PropertyDetails;
