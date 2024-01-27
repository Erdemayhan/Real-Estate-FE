import React from "react";
import "./projectDetails.css";
import Heading from "../searchBar/Heading";
import useAPI from "../../effects/useAPI";
import getAllProperties from "../../services/getAllProperties";
import getPropertyTypes from "../../services/getPropertyTypes";
import getPropertyStatuses from "../../services/getPropertyStatuses";

const PropertyDetails = () => {
  const [loading, error, response] = useAPI(() => getAllProperties());
  const [loading2, error2, response2] = useAPI(() => getPropertyTypes());
  const [loading3, error3, response3] = useAPI(() => getPropertyStatuses());

  if ((error, error2, error3)) {
    return <div>Something went wrong</div>;
    // eslint-disable-next-line no-sequences
  }
  if ((loading, loading2, loading3)) {
    return <div>Loading...</div>;
  }
  const { properties } = response;
  const { property_types } = response2;
  const { propertyStatuses } = response3;

  return (
    <>
      <div className="PropertyDetails">
        <form>
          <Heading title="View The Property You Search" />
          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Pick your city
              </option>
              {properties.map((property) => {
                return (
                  <>
                    <option value={property.location}>
                      {property.location}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          {/*Might need new endpoint that would display status except Off the market */}
          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Status
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Current Property Status
              </option>
              {propertyStatuses.map((propertyStatus, index) => {
                return (
                  <>
                    <option key={index} value={propertyStatus.propertyStatus}>
                      {propertyStatus.propertyStatus}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Price Range
              </option>
              {properties.map((property) => {
                return (
                  <>
                    <option value={property.price}>{property.price}</option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Property Type
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Property Type
              </option>
              {property_types.map((property_type, index) => {
                return (
                  <>
                    <option key={index} value={property_type.propertyType}>
                      {property_type.propertyType}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Property Size
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Property Size
              </option>
              {properties.map((property) => {
                return (
                  <>
                    <option value={property.sizeSqMeters}>
                      {property.sizeSqMeters}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Number of Bedrooms
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Number Of Bedrooms
              </option>
              {properties.map((property) => {
                return (
                  <>
                    <option value={property.noOfBedrooms}>
                      {property.noOfBedrooms}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Number of Bathrooms
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Number Of Bathrooms
              </option>
              {properties.map((property) => {
                return (
                  <>
                    <option value={property.noOfBathrooms}>
                      {property.noOfBathrooms}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Number of Rooms
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Number Of Rooms
              </option>
              {properties.map((property) => {
                return (
                  <>
                    <option value={property.noOfRooms}>
                      {property.noOfRooms}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Listed Date
            </label>
            <select defaultValue="">
              <option value="" disabled hidden>
                Listed Date
              </option>
              {properties.map((property) => {
                return (
                  <>
                    <option value={property.listedDate}>
                      {property.listedDate}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <button className="btn1" type="submit">
              Search
            </button>
          </div>
        </form>

        <div className="container2 ">
          <h1>Property Information</h1>
          <div className="first col-2">
            <p>Location : Famagusta</p>
            <p>Price : 200,000 </p>
            <p>Status : For Sale</p>
            <p>Type : Apartment </p>
            <p>Size square meters : 100</p>
            <p>No. of bedrooms : 2</p>
            <p>No. of bathrooms : 1</p>
            <p>No. of rooms : 3</p>
            <p>Listed Date : 2023-03-01 </p>
          </div>
        </div>
        <div className="container3 ">
          <h1>Property Information</h1>
          <div className="second col-2">
            <p>Location : Kyrenia</p>
            <p>Price : 150,000 </p>
            <p>Status : For Rent</p>
            <p>Type : Villa </p>
            <p>Size square meters : 200</p>
            <p>No. of bedrooms : 3</p>
            <p>No. of bathrooms : 2</p>
            <p>No. of rooms : 5</p>
            <p>Listed Date : 2021-03-01 </p>
          </div>
        </div>
        <div className="container4 ">
          <h1>Property Information</h1>
          <div className="third col-2 ">
            <p>Location : Omorfou</p>
            <p>Price : 100,000 </p>
            <p>Status : NEW!</p>
            <p>Type : Dormitory </p>
            <p>Size square meters : 80 </p>
            <p>No. of bedrooms : 1</p>
            <p>No. of bathrooms : 1</p>
            <p>No. of rooms : 2</p>
            <p>Listed Date : 2021-03-01 </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
