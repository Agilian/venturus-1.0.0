import React from "react";
import "../styles/components/user-information.css";

const UserInformation: React.FC = () => {

  return (
    <div className="app-user-information">
        <text className="app-user-information-texto">John Doe</text>
        <text className="app-user-information-iniciais">JD</text>
    </div>
  );
};
export default UserInformation;