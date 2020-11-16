import React from "react";
import "../styles/components/search-results.css";
import { Box } from './Box';

interface IMyProps {
  mySearchResultsName: any,
  mySearchResultsAge: any,
  mySearchResultsNationality: any,
}

const SearchResults: React.FC<IMyProps> = (props: IMyProps) => {
  return (
    <li className="SearchResultsComponent">
      <Box name={props.mySearchResultsName} age={props.mySearchResultsAge} nationality={props.mySearchResultsNationality} />

    </li>
  );
};

export default SearchResults;