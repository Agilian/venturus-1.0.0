import React from "react";

import "../styles/components/element-list-component.css";



interface IMyProps {
  name: any,
  description: any,
}

const ElementListComponent: React.FC<IMyProps> = (props: IMyProps) => {


    return (
    <div className="ElementListComponent">
        <text className="ElementListComponent-name"> {props.name} </text>
        <text className="ElementListComponent-description"> {props.description}</text>
    </div>
  );
};

export default ElementListComponent;