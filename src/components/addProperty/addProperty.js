import React from "react";
import "./addproperty.css";
import Heading from "../searchBar/Heading";
import useAPI from "../../effects/useAPI";
import getAllProperties from "../../services/getAllProperties";
import getPropertyTypes from "../../services/getPropertyTypes";
import getPropertyStatuses from "../../services/getPropertyStatuses";

const AddProperty = () => {
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
  console.log(propertyStatuses);

  return (
    <>
      <div className="PropertyDetails1">
        <form>
          <Heading title="Display yur Property in Our Site" />
          {/*Works*/}
          <div className="box">
            <span>City/Street</span>
            <select id="cities" className="custom-select" defaultValue="">
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

          {/*Works*/}
          <div className="box">
            <span>Price Range</span>
            <select id="prices" className="custom-select" defaultValue="">
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

          {/*Works*/}
          <div className="box">
            <span>Property Type</span>
            <select
              id="property-types"
              className="custom-select"
              defaultValue=""
            >
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

          <div className="box">
            <span>Property Status</span>
            <select
              id="property-types"
              className="custom-select"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Property Status
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

          {/* <div className="form-group">
          <label htmlFor="status" className="form-label">Status</label>
          <div>
            <div>
              <input type="radio" name="status" value="For Sale"/>
              <label htmlFor="For Sale">For Sale</label>
            </div>
            <div>
              <input type="radio" name="status" value="For Rent"/>
              <label htmlFor="For Rent">For Rent</label>
            </div>
            <div>
              <input type="radio" name="status" value="Off the Market"/>
              <label htmlFor="Off the Market">Off the Market</label>
            </div>
            <div>
              <input type="radio" name="status" value="NEW!"/>
              <label htmlFor="NEW!">NEW!</label>
            </div>
          </div>
        </div> */}

          <div className="box">
            <span>Property Size</span>
            <select id="sizeSqMeter" className="custom-select" defaultValue="">
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

          <div className="box">
            <span>Number of Bedrooms</span>
            <select
              id="Number-of-Bedrooms"
              className="custom-select"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Number of Bedrooms
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

          <div className="box">
            <span>Number of Bathrooms</span>
            <select
              id="Number-of-Bathrooms"
              className="custom-select"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Number of Bathrooms
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

          <div className="box">
            <span>Number of Rooms</span>
            <select
              id="Number-of-Rooms"
              className="custom-select"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Number of Rooms
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

          <div className="box">
            <span>Listed Date</span>
            <select id="Listed-Date" className="custom-select" defaultValue="">
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
            <button className="bton" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
