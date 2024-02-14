import React, { useState, useEffect } from "react";
import "./useprofile.css";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [userType, setUserType] = useState("user"); // Default to "user", but you can set it to "agent" if needed
  const [createdDate, setCreatedDate] = useState(null);

  useEffect(() => {
    // Set the created date when the component is mounted (initialized)
    const currentDate = new Date();
    setCreatedDate(currentDate.toISOString());
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to send user profile data to the server or perform other actions

    // For now, let's log the user profile data
    console.log({
      username,
      email,
      profilePicture,
      userType,
      createdDate,
    });
  };

  return (
    <div className="UserProfile">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Profile Picture:
          <input
            type="file"
            accept="../Assets/person.png"
            onChange={handleProfilePictureChange}
          />
        </label>
        <br />
        <label>
          User Type:
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
        </label>
        <br />
        <p>Created Date: {createdDate}</p>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
