import React from "react";

import "../styles/components/element-list-component-top5.css";

const ElementListComponentTop5: React.FC = () => {


    return (
      <div>
        <div className="ElementListComponentTop5">
            <text className="ElementListComponentTop5-name"> Inter Milan </text>
            <text className="ElementListComponentTop5-description"> 31.9</text>
        </div>
        <div className="ElementListComponentTop5">
            <text className="ElementListComponentTop5-name"> Apoel Nicosia </text>
            <text className="ElementListComponentTop5-description"> 31.7</text>
        </div>
        <div className="ElementListComponentTop5">
            <text className="ElementListComponentTop5-name"> AC Milan </text>
            <text className="ElementListComponentTop5-description"> 31.6</text>
        </div>
        <div className="ElementListComponentTop5">
            <text className="ElementListComponentTop5-name"> Besikas JK </text>
            <text className="ElementListComponentTop5-description"> 31.4</text>
        </div>
        <div className="ElementListComponentTop5">
            <text className="ElementListComponentTop5-name"> Olympiacos Piraeus </text>
            <text className="ElementListComponentTop5-description"> 31.3</text>
        </div>
    </div>
  );
};

export default ElementListComponentTop5;