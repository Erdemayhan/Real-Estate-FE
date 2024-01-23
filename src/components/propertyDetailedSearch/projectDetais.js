import { useState } from "react"

const PropertyDetails = () => {   

    const [formData, setFormData] = useState({
      location: 'Famagusta',
      priceRange: '300.000 - 500.000',
      status: [],
      type: 'apartment',
      sizeSqMeters: '200',
      noOfBedrooms: '1',
      noOfBathrooms: '2',
      noOfRooms : '7',
      listedDate: '2023'
    })
  
    const [formError, setFromError] = useState({})
   
    const onChangeHandler = (event) => {
      console.log (event)
      setFormData (() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  
    const validateForm = () => {
      let err = {}
      let isValid = true;
      if (formData.location === '') {
        err.location = 'Location is required'
        isValid = false;
      }
      setFromError({...err})
  
      if (isValid) {
        alert('Form submitted');
      } else {
        alert('Invalid form');
      }
    
      return isValid;
    }
   
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log("Form Data:", formData)
        let isValid = validateForm()
        console.log(isValid)
      }
  
    return (
      <>
      <div className="App">
        <h1>Property Details</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="location" className="form-label">Location</label>
            <input className="form-control" name="location" onChange={onChangeHandler} value={formData.location} />
            <span className="non-valid">{formError.location}</span>
          </div>
      <div className="form-group">
          <label htmlFor="priceRange" className="form-label">Price Range (£)</label>
          <select className="form-select" name="priceRange" onChange={onChangeHandler} value={formData.priceRange}>
            <option value="15.000 - 100.000">15.000 - 100.000</option>
            <option value="100.000 - 200.000">100.000 - 200.000</option>
            <option value="300.000 - 500.000">300.000 - 500.000</option>
          </select>
        </div>
      <div className="form-group">
          <label htmlFor="status" className="form-label">Status</label>
          <div>
            <div>
              <input type="radio" name="status" value="For Sale" onChange={onChangeHandler} checked={formData.status.indexOf('For Sale') !== -1} />
              <label htmlFor="For Sale">For Sale</label>
            </div>
            <div>
              <input type="radio" name="status" value="For Rent" onChange={onChangeHandler} checked={formData.status.indexOf('For Rent') !== -1} />
              <label htmlFor="For Rent">For Rent</label>
            </div>
            <div>
              <input type="radio" name="status" value="Off the Market" onChange={onChangeHandler} checked={formData.status.indexOf('Off the Market') !== -1} />
              <label htmlFor="Off the Market">Off the Market</label>
            </div>
            <div>
              <input type="radio" name="status" value="NEW!" onChange={onChangeHandler} checked={formData.status.indexOf('NEW!') !== -1} />
              <label htmlFor="NEW!">NEW!</label>
            </div>
          </div>
          </div>
      <div className="form-group">
          <label htmlFor="type" className="form-label">Type</label>
          <select className="form-select" name="type" onChange={onChangeHandler} value={formData.type}>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Land">Land</option>
            <option value="Office">Office</option>
            <option value="Semi-Detached House">Semi-Detached House</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Dormitory">Dormitory</option>
            <option value="Studio">Studio</option>
          </select>
      </div>
      <div className="form-group">
          <label htmlFor="sizeSqMeters" className="form-label">Size square meters</label>
          <select className="form-select" name="sizeSqMeters" onChange={onChangeHandler} value={formData.sizeSqMeters}>
            <option value="80.00 - 100.00">80.00 - 100.00</option>
            <option value="100.00 - 150.00">100.00 - 150.00</option>
            <option value="150.00 - 200.00">150.00 - 200.00</option>
          </select> 
      </div>
      <div className="form-group">
          <label htmlFor="noOfBedrooms" className="form-label">No. of bedrooms</label>
          <select className="form-select" name="noOfBedrooms" onChange={onChangeHandler} value={formData.noOfBedrooms}>
            <option value="1">1</option>
            <option value="2 ">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> 
      </div>
      <div className="form-group">
          <label htmlFor="noOfBathrooms" className="form-label">No. of bathrooms</label>
          <select className="form-select" name="noOfBathrooms" onChange={onChangeHandler} value={formData.noOfBathrooms}>
            <option value="1">1</option>
            <option value="2 ">2</option>
            <option value="3">3</option>
          </select>
      </div>
      <div className="form-group">
          <label htmlFor="noOfRooms" className="form-label">No. of rooms</label>
          <select className="form-select" name="noOfBathrooms" onChange={onChangeHandler} value={formData.noOfRooms}>
            <option value="1">1</option>
            <option value="2 ">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            </select>
      </div>
      <div className="form-group">
          <label htmlFor="listedDate" className="form-label">Listed date</label>
          <select className="form-select" name="listedDate" onChange={onChangeHandler} value={formData.listedDate}>
            <option value="2019">2019</option>
            <option value="2020 ">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
      </div>
      <div className="form-group">
            <button className="btn" type="submit" onClick={()=> console.log(formData)} >Search</button>
          </div>
      </form>
      </div>
</>
);
}

export default PropertyDetails;
