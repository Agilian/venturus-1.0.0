import React from "react";
import {  } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import "../styles/components/topbar.css";
import UserInformation from "./UserInformation";

const Topbar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <aside className="app-topbar">
      <footer>
        <text onClick={goBack} className="app-topbar-logo">V</text>
        <text className="app-topbar-title">Squad Management Tool</text>
        <UserInformation/>
      </footer>
    </aside>
  );
};

export default Topbar;