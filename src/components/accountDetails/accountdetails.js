import React, { useState } from "react";
import "./accountdetail.css";
import Personal from "./Personal";
import ChangePassword from "./ChangePassword";
import SignOut from "./SignOut";
import DeleteAccount from "./DeleteAccount";

function AccountDetails() {
  const tabs = [
    { name: "Personal Details", component: <Personal /> },
    { name: "Change Password", component: <ChangePassword /> },
    { name: "Sign Out", component: <SignOut /> },
    { name: "Delete Account", component: <DeleteAccount /> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <div className="profile-tabs">
        {tabs.map((tab, index) => {
          return (
            <div
              className={`col-2 py-4 ${
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
      <div className="row-4">{tabs.at(activeTab).component}</div>
    </div>
  );
}

export default AccountDetails;
