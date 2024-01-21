import React, { useState } from "react";
import "./pages/Profile/Profile.css";
import ProfileImage from "./pages/Profile/person.png";
import General from "./General";
import Personal from "./Personal";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import SignOut from "./SignOut";
import Favoriler from "./Favoriler";

function Profile() {
  const tabs = [
    { name: "General", component: <General /> },
    { name: "Personal", component: <Personal /> },
    { name: "Favorites", component: <Favoriler /> },
    { name: "Change Password", component: <ChangePassword /> },
    { name: "Delete Account", component: <DeleteAccount /> },
    { name: "Sign Out", component: <SignOut /> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      <div className="row g-0 align-items-center justify-context-center vh-100"></div>
      <div className="col-10 row g-0 border rounded-3"> </div>
      <div className="col-4"> </div>
      <div className="text center mb-2">
        <img
          src={ProfileImage}
          alt="profile for user"
          className="img-fluid profile-image mb-1"
        />
        <h6> Username </h6>
      </div>
      <div className="row g-0 justify-content-end my-4 px-3 ">
        <input
          type="text"
          className="d-none"
          id="file-input"
          onChange={(e) => {
            console.log(e);
          }}
        />
        <label
          htmlFor="file-input"
          className="col-2 text-center profile-img-action-btn p-1"
        >
          Change
        </label>
        <button className="col-2 offset-1 p-1 profile-img-action-btn">
          {" "}
          Delete
        </button>
      </div>
      <div className="col-8 border-start">
        <div className="row g-0 profile-tabs">
          {tabs.map((tab, index) => {
            return (
              <div
                className={`col-3 py-3 ${
                  activeTab === index ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(index)}
                key={tab.name}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div className="row g-0 mt-4 p-3">{tabs.at(activeTab).component}</div>
        <div className="row g-0 justify-content-end p-3 mt-5">
          {editMode ? (
            <>
              <button className="col-3 edit-profile-btn p-2 rounded-2">
                Change Password
              </button>
              <button className="col-3 edit-profile-btn p-2 rounded-2">
                Delete Account
              </button>
            </>
          ) : (
            <button
              className="col-3 edit-profile-btn p-2 rounded-2"
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
