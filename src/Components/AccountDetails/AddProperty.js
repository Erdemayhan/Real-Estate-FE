import React, { useState } from "react";
import "./addproperty.css";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    location: "Famagusta",
    priceRange: "500.000",
    status: "",
    type: "apartment",
    sizeSqMeters: "200",
    noOfBedrooms: "1",
    noOfBathrooms: "2",
    noOfRooms: "7",
    listedDate: "2023",
    description: "A luxury apartment in the heart of Famagusta",
  });

  const [formError, setFormError] = useState({}); // Fixed variable name

  const onChangeHandler = (event) => {
    console.log(event);
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};
    let isValid = true;

    if (formData.location === "") {
      err.location = "Location is required";
      isValid = false;
    }
    if (formData.priceRange === "") {
      err.priceRange = "Price Range is required";
      isValid = false;
    }
    if (formData.status === "") {
      err.status = "Status is required";
      isValid = false;
    }
    if (formData.type === "") {
      err.type = "Type is required";
      isValid = false;
    }
    if (formData.sizeSquareMeters === "") {
      err.sizeSquareMeters = "Size square meters is required";
      isValid = false;
    }
    if (formData.noOfBedrooms === "") {
      err.noOfBedrooms = "No. of Bedrooms is required";
      isValid = false;
    }
    if (formData.noOfBathrooms === "") {
      err.noOfBathrooms = "No. of Bathrooms is required";
      isValid = false;
    }
    if (formData.noOfRooms === "") {
      err.noOfRooms = "No. of Rooms is required";
      isValid = false;
    }
    if (formData.listedDate === "") {
      err.listedDate = "Listed date is required";
      isValid = false;
    }

    setFormError({ ...err });

    if (isValid) {
      alert("Form submitted");
    } else {
      alert("Invalid form");
    }

    return isValid;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    let isValid = validateForm();
    console.log(isValid);
  };

  return (
    <>
      <div className="PropertyDetails">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              className="form-control"
              name="location"
              onChange={onChangeHandler}
              value={formData.location}
            />
            <span className="non-valid">{formError.location}</span>
          </div>
          <div className="form-group">
            <label htmlFor="priceRange" className="form-label">
              Price Range (£)
            </label>
            <select
              className="form-select"
              name="priceRange"
              onChange={onChangeHandler}
              value={formData.priceRange}
            >
              <option value=""></option>
              <option value="15.000 - 100.000">15.000 - 100.000</option>
              <option value="100.000 - 200.000">100.000 - 200.000</option>
              <option value="300.000 - 500.000">300.000 - 500.000</option>
            </select>
            <span className="non-valid">{formError.priceRange}</span>
          </div>
          <div className="form-group">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="For Sale"
                  onChange={onChangeHandler}
                  checked={formData.status.indexOf("For Sale") !== -1}
                />
                <label htmlFor="For Sale">For Sale</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="For Rent"
                  onChange={onChangeHandler}
                  checked={formData.status.indexOf("For Rent") !== -1}
                />
                <label htmlFor="For Rent">For Rent</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="Off the Market"
                  onChange={onChangeHandler}
                  checked={formData.status.indexOf("Off the Market") !== -1}
                />
                <label htmlFor="Off the Market">Off the Market</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="NEW!"
                  onChange={onChangeHandler}
                  checked={formData.status.indexOf("NEW!") !== -1}
                />
                <label htmlFor="NEW!">NEW!</label>
              </div>
            </div>
            <span className="non-valid">{formError.status}</span>
          </div>
          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select
              className="form-select"
              name="type"
              onChange={onChangeHandler}
              value={formData.type}
            >
              <option value=""></option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
              <option value="Land">Land</option>
              <option value="Office">Office</option>
              <option value="Semi-Detached House">Semi-Detached House</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Dormitory">Dormitory</option>
            </select>
            <span className="non-valid">{formError.type}</span>
          </div>
          <div className="form-group">
            <label htmlFor="sizeSquareMeters" className="form-label">
              Size square meters
            </label>
            <input
              className="form-control"
              name="sizeSquareMeters"
              onChange={onChangeHandler}
              value={formData.sizeSquareMeters}
            />
            <span className="non-valid">{formError.sizeSquareMeters}</span>
          </div>
          <div className="form-group">
            <label htmlFor="noOfBedrooms" className="form-label">
              No. of bedrooms
            </label>
            <input
              className="form-control"
              name="noOfBedrooms"
              onChange={onChangeHandler}
              value={formData.noOfBedrooms}
            />
            <span className="non-valid">{formError.noOfBedrooms}</span>
          </div>
          <div className="form-group">
            <label htmlFor="noOfBathrooms" className="form-label">
              No. of bathrooms
            </label>
            <input
              className="form-control"
              name="noOfBathrooms"
              onChange={onChangeHandler}
              value={formData.noOfBathrooms}
            />
            <span className="non-valid">{formError.noOfBathrooms}</span>
          </div>
          <div className="form-group">
            <label htmlFor="noOfRooms" className="form-label">
              No. of Rooms
            </label>
            <input
              className="form-control"
              name="noOfRooms"
              onChange={onChangeHandler}
              value={formData.noOfRooms}
            />
            <span className="non-valid">{formError.noOfRooms}</span>
          </div>
          <div className="form-group">
            <label htmlFor="listedDate" className="form-label">
              Listed date
            </label>
            <select
              className="form-select"
              name="listedDate"
              onChange={onChangeHandler}
              value={formData.listedDate}
            >
              <option value=""></option>
              <option value="2019">2019</option>
              <option value="2020 ">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <span className="non-valid">{formError.listedDate}</span>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              className="form-control"
              name="description"
              onChange={onChangeHandler}
              value={formData.description}
            />
          </div>
          <div className="form-group">
            <button
              className="btn"
              type="submit"
              onClick={() => console.log(formData)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
