import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import "../styles/components/create-your-team.css";
import Title from "./Title";
import Search from "./Search";

const CreateYourTeam: React.FC = () => {
  const [teamName, setTeamName] = useState("");
  const [teamSite, setTeamSite] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [teamType, setTeamType] = useState("");
  const [teamFormation, setTeamFormation] = useState("");
  const [name, setName] = useState("http://www.");
  const [validation, setValidation] = useState("");
  
  useEffect(() => {
    if( (name.substring(0,11) === "http://www.") || (name.substring(0,11) === "https://www" ) ){
      checkOnline(name, function() { setValidation("site fora do ar") }, function(){setValidation("site validado") });
      setTeamSite(name.substr(11));
    }else{
      setName("http://www.")
      setTeamSite('');
    }
  }, [name]);

  useEffect(() => {
    setValidation(validation);
  }, [validation]);

  function checkOnline(url:any, error:any, ok:any) {

    try {
        var scriptElem = document.createElement('script');
        scriptElem.type = 'text/javascript';
        scriptElem.onerror = function(){error();};
        scriptElem.onload = function(){ok();};
        scriptElem.src = url;
        document.getElementsByTagName("body")[0].appendChild(scriptElem);
    } catch(err) {
        error(err);
    }
  };

  return (
    <div className="create-your-team">
      <Title myTitle="Create Your Team" />
        <div className="div1">

          <div className="div2">TEAM INFORMATION</div>

          <div className="grid-container">
            <div className="grid-item">
              <label>
                <div>Team Name:</div>
                <input id="teamName" value={teamName} className="input" type="text" name="teamName" onChange={(e) => setTeamName(e.target.value)}/>
              </label>
            </div>

            <div className="grid-item">
              <label>
                <div>Team Website:</div>
                
                <input
                id="site"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input" 
                type="text"
                name="site"
              />
              <input
                id="validation"
                value={validation}
                onChange={(e) => setName(e.target.value)}
                className="input" 
                type="text"
                name="validation"
              />
              </label>
            </div>

            <div className="grid-item">
              <label>
                <div>Description:</div>
                <textarea id="input-description" value={teamDescription} className="input" name="description" onChange={(e) => setTeamDescription(e.target.value)} > </textarea>
              </label>
            </div>

            <div className="grid-item">
              <label>
                <div>Team Type:</div>
                <input type="radio" value="Real" name="type" /> Real
                <input type="radio" value="Fantasy" name="type" /> Fantasy
                <input id="teamType" value={teamType} className="input" type="text" name="teamType" onChange={(e) => setTeamType(e.target.value)}/>
              </label>
              <div>
                <label>
                  <div>Tags:</div>
                  <textarea className="input" id="input-tags" name="description" > </textarea>
                </label>
              </div>
            </div>
          </div>

          <div className="div2">CONFIGURE SQUAD</div>

          <div className="grid-container2">
            <div className="grid-item2">
              <label>Formation:</label>
                <select id="formation" value={teamFormation} name="formation" onChange={(e) => setTeamFormation(e.target.value)} >
                  <option value="3223">3 - 2 - 2 - 3</option>
                  <option value="3231">3 - 2 - 3 - 1</option>
                  <option value="343">3 - 4 - 3</option>
                  <option value="352">3 - 5 - 2</option>

                  <option value="4231">4 - 2 - 3 - 1</option>
                  <option value="4311">4 - 3 - 1 - 1</option>
                  <option value="432">4 - 3 - 2</option>
                  <option value="442">4 - 4 - 2</option>
                  <option value="451">4 - 5 - 1</option>
                  <option value="541">5 - 4 -1</option>
                </select>

            </div>

            <div className="grid-item2">
              <label>
                <div>Search Players:</div>
                <Search />
                
              </label>
            </div>

            <div className="grid-item2">
              <div className="fild"></div>
            </div>

            <div className="grid-item2">
              <div className="jogador">

              </div>
            </div>

            <div id="divBtSave" className="grid-item2">
              <button onClick={validateForm} id="btSave">Save</button>

              <ValidateLinkForCreate n={teamName} s= {teamSite} d={teamDescription} t={teamType} f={teamFormation}/>

            </div>
          </div>
        </div>
    </div>
    
  );
};

function ValidateLinkForCreate(props :any) {
  if (  props.n==='' || props.s==='' || props.d==='' || props.t==='' || props.f==='') {
    return <Link to ={"/"} > Complete o Formulário  </Link>
  }else{
    return <Link to ={"/"+props.n+"/"  + props.s + "/" + props.d + "/" + props.t + "/" + props.f + "/"} > link  </Link>
  }
}

const validateForm = () => {
  console.log("its working");
}

export default CreateYourTeam;