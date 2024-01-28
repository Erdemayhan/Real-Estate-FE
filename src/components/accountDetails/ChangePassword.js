import React, { useState } from "react";
import "./changePassword.css";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform password change logic, e.g., make an API request
    // Update the following with your actual API endpoint and logic

    // Dummy API endpoint
    const apiUrl = "https://your-api.com/change-password";

    // Dummy user ID, replace with your authentication logic
    const userId = "user123";

    // Dummy payload
    const data = {
      userId,
      currentPassword,
      newPassword,
    };

    // Make API request
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include any authentication headers if needed
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle API response
        setMessage(result.message);
        // You may want to redirect the user or perform other actions here
      })
      .catch((error) => {
        // Handle errors
        console.error("Error changing password:", error);
      });
  };

  return (
    <div className="Change">
      <form onSubmit={handleSubmit}>
        <label>
          Current Password:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>

        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>

        <label>
          Confirm New Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <button type="submit">Change Password</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
