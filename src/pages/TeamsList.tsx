import React from "react";
import { useLocation } from "react-router-dom";
import { useStorageState } from 'react-storage-hooks';


import "../styles/pages/teams-list.css";
import Topbar from "../components/Topbar";
import MyTeams from "../components/MyTeams";
import Top5 from "../components/Top5";
import Statistics from "../components/Statistics";

interface IMyProps {
  pages: any,
}

const TeamsList: React.FC<IMyProps> = (props: IMyProps) => {
    const location = useLocation();
    const [newTeamName, setNewTeamName, writeError] = useStorageState(localStorage, 'state-counter','ds');

   
      return (
        <div id="page-team">
          <Topbar />
          <MyTeams location={location.pathname}/>
          <Top5 />
          <Statistics />
      <div>{location.pathname}</div>


            </div>

      );
}
export default TeamsList;