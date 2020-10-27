import React from "react";

import "../styles/components/element-list-component-top5-lowest.css";

const ElementListComponentTop5Lowest: React.FC = () => {


    return (
    <div>
    <div className="ElementListComponentTop5Lowest">
        <text className="ElementListComponentTop5Lowest-name"> Zalgiris Vilnius </text>
        <text className="ElementListComponentTop5Lowest-description"> 21.1</text>
    </div>
    <div className="ElementListComponentTop5Lowest">
        <text className="ElementListComponentTop5Lowest-name"> Arsenal FC </text>
        <text className="ElementListComponentTop5Lowest-description"> 21.6</text>
    </div>
    <div className="ElementListComponentTop5Lowest">
        <text className="ElementListComponentTop5Lowest-name"> Ajax Amsterdam </text>
        <text className="ElementListComponentTop5Lowest-description"> 22.0</text>
    </div>
    <div className="ElementListComponentTop5Lowest">
        <text className="ElementListComponentTop5Lowest-name"> FC Nantes </text>
        <text className="ElementListComponentTop5Lowest-description"> 22.1</text>
    </div>
    <div className="ElementListComponentTop5Lowest">
        <text className="ElementListComponentTop5Lowest-name"> CSKA Moscow </text>
        <text className="ElementListComponentTop5Lowest-description"> 22.5</text>
    </div>
    </div>
  );
};

export default ElementListComponentTop5Lowest;