import React, { useState } from "react";
import "./accountdetail.css";
import Personal from "./Personal";
import ChangePassword from "./ChangePassword";
import SignOut from "./SignOut";
import DeleteAccount from "./DeleteAccount";

const AccountDetails = () => {
  const tabs = [
    { name: "Personal Details", component: <Personal /> },
    { name: "Change Password", component: <ChangePassword /> },
    { name: "Sign Out", component: <SignOut /> },
    { name: "Delete Account", component: <DeleteAccount /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="profile-tabs">
        {tabs.map((tab, index) => (
          <div
            className={`tab ${activeTab === index ? "active-tab" : ""}`}
            onClick={() => setActiveTab(index)}
            key={tab.name}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div>{tabs[activeTab].component}</div>
    </div>
  );
};

export default AccountDetails;
