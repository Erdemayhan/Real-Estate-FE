import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignHanging, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Navbar.css'

function NavBar() {
    return (
      <div className='Navbar'>
        <a href="/">
          <FontAwesomeIcon icon={faSignHanging} />
          Real Estate
        </a>
        <Link className="item" to="/view-properties">
          View Properties
        </Link>
        <Link to="/add-property" className="item">
          Add a Property
        </Link>
        <Link to="/profile-page" className="item">
          Profile
        </Link>
        <Link to="/Sign-In" className="item2">
        <FontAwesomeIcon icon={faRightToBracket} />Sign in
        </Link>
      </div>
    )
  }
  
  export default NavBar