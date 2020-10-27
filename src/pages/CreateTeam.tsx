import React from "react";

import "../styles/pages/create-team.css";

import Topbar from "../components/Topbar";
import CreateYourTeam from "../components/CreateYourTeam";


export default function CreateTeam(props : any) {
  
  return (
    <div id="page-create-team">
      <Topbar />
      <CreateYourTeam />
    </div>
  );
}