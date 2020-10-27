import React, { useEffect, useState } from "react";

import "../styles/components/create-your-team.css";
import SearchResults from "./SearchResults";

const Search: React.FC = () => {
  
async function getFromAPI(j: any){
  console.log("oi");
  console.log(j);
    const response1 = await fetch(" https://v2.api-football.com/players/search/"+j, {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "v1.baseball.api-sports.io",
          "x-rapidapi-key": "893db409475bc9b11d97e501ac97f863"
      },
    })

    const data = await response1.json();
    const dataAPI = data.api;
    const results = dataAPI.results;
    const players = dataAPI.players;
    var arraySearch = [];
    for (var i = 0; i < results; i++) {
      var object = players[i];
      for (var propi in object) {
        if( propi == "age" || propi == "player_name" || propi == "nationality"){
          arraySearch.push(object[propi].toString());
        }
      }
    }
    return arraySearch;
  }

const [search, setSearch] = useState("");
const [rr, setRr] = useState(['']);
let RESPONSE = [];
  
useEffect(() => {
  async function awaitResponse() {
    RESPONSE = (await getFromAPI(search));
    console.log(RESPONSE);
    setRr(RESPONSE.slice());
  }
  awaitResponse();
}, [search]);

const pits = rr.map((d, i) => {
  if(((i%3)==0)  || i ==0){
    return (
          <SearchResults
              mySearchResultsName={rr[i]}
              mySearchResultsAge={rr[i+1]}
              mySearchResultsNationality={rr[i+2]}
              />
      );
  }
  
})
    return (
    <div className="search">
      <input
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input" 
        type="text"
        name="search"
      />
      <div className="search-results">
        <ul>
          {pits}
        </ul>
      </div>
      
    </div>
  );
};

export default Search;