import React, { useState } from "react";
import "./delete.css";
import deleteUserById from "../../services/deleteUserById";
import { useNavigate } from "react-router-dom"

const DeleteAccount = () => {
  const [userId, setUserId] = useState("");
  const [deleteFail, setDeleteFail] = useState(false);
  

  const navigate = useNavigate();

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await deleteUserById({userId});
    console.log(response);
    setDeleteFail(false);
    navigate('/');
  } catch (error) {
    console.log(error);
    setDeleteFail(true);
  }
};

return (
  <form onSubmit={handleSubmit}> 
  {deleteFail && <div className="error">Invalid action</div>}
  <div className="input">
    <p>Are you sure you want to delete your account?</p>
    <input
      type="text"
      placeholder="Type 'DELETE' to confirm"
      value={userId}
      onChange={e => setUserId(e.target.value)} 
       />
    <button onClick={handleSubmit}>
      Delete Account
    </button>
  </div>
  </form>
);
};

export default DeleteAccount;
