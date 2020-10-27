import React from "react";
import Title from "./Title";
import ElementListComponentTop5 from "./ElementListComponentTop5";
import ElementListComponentTop5Lowest from "./ElementListComponentTop5Lowest";
import "../styles/components/top5.css";

const Top5: React.FC = () => {

  return (
    <div className="top5">
      <div className="titles">
        <Title myTitle="Top 5" />
      </div>
      <div className="my-top5-teams-list">
        <ElementListComponentTop5 />
      </div>
      <div className="my-top5-teams-list-lowest">
        <ElementListComponentTop5Lowest />
      </div>
    </div>

  );
};

export default Top5;