import React from "react";
import "./Floor.css";
const Floor = ({ floorNumber }) => {
  return (
    <div className="floor">
      <h2 className='floor__number__heading'>  { floorNumber !==0 ? ` Floor ${floorNumber}` : "Basement"} </h2>
    </div>
  );
};

export default Floor;
