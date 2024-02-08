import React, { useState } from "react";
import "./changePassword.css";
import { useNavigate } from "react-router-dom";
import patchAllPasswordsFromUsers from "../../services/patchAllPasswordsFromUsers";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault(); 
    
      try {
        const response = await patchAllPasswordsFromUsers();
        navigate('/');
      } catch (error) {
        console.log(error);
      }
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
