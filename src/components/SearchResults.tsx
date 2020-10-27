import React from "react";
import "../styles/components/search-results.css";

interface IMyProps {
  mySearchResultsName: any,
  mySearchResultsAge: any,
  mySearchResultsNationality: any,
}

const SearchResults: React.FC<IMyProps> = (props: IMyProps) => {
  return (
    <li className="SearchResultsComponent">
      <text className="SearchResultsComponentText">Name:{props.mySearchResultsName}</text>
      <text className="SearchResultsComponentText">Age:{props.mySearchResultsAge}</text>
      <text className="SearchResultsComponentText">Nationality:{props.mySearchResultsNationality}</text>

    </li>
  );
};

export default SearchResults;