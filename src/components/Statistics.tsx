import React from "react";
import "../styles/components/statistics.css";
import ney from '../images/neymar.jpg'
import cr7 from '../images/cr7.jpg'
const Statistics: React.FC = () => {

  return (
    <div className="statistics">
      <div className="left">
        <text>Most picked player</text>
        <img className="imgNey" src={ney} />

      </div>
      <div className="right">
      <text>Most picked player</text>
        <img className="imgCr7" src={cr7} />
      </div>
    </div>
  );
};

export default Statistics;