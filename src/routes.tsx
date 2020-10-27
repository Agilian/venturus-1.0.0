import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TeamsList from "./pages/TeamsList";
import CreateTeam from "./pages/CreateTeam";

//const Routes: React.FC = () => {
  export default class Routes extends React.Component{
    render(){
      return (
        <BrowserRouter>
          <Switch>
            <Route path={"/"} pages={"1"} exact component={TeamsList} />
            <Route path={"/:TeamName/:TeamSite/:TeamDescription/:TeamType/:TeamFormation/"} pages={"1"} exact component={TeamsList} />
            <Route path="/Teams/create" component={CreateTeam} />
          </Switch>
        </BrowserRouter>
      );
    }
  
}