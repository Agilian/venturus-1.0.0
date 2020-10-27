import React from "react";
import "../styles/components/title.css";

interface IMyProps {
  myTitle: string,
}

const Title: React.FC<IMyProps> = (props: IMyProps) => {

  return (
    <div className="titleComponent">
      <text>{props.myTitle}</text>
    </div>
  );
};

export default Title;