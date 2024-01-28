import React, { useState } from "react";
import "./delete.css";
const DeleteAccount = () => {
  const [confirmation, setConfirmation] = useState("");

  const handleConfirmationChange = (e) => {
    setConfirmation(e.target.value);
  };

  const handleDeleteAccount = () => {
    // Add logic to send a request to your server to delete the account
    // You may want to include authentication tokens in the request headers
    // The server should handle the actual account deletion
  };

  return (
    <div className="Delete">
      <p>Are you sure you want to delete your account?</p>
      <input
        type="text"
        placeholder="Type 'DELETE' to confirm"
        value={confirmation}
        onChange={handleConfirmationChange}
      />
      <button
        onClick={handleDeleteAccount}
        disabled={confirmation !== "DELETE"}
      >
        Delete Account
      </button>
    </div>
  );
};

export default DeleteAccount;
