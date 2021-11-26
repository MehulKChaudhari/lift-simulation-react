import React from "react";
import "./Floor.css";
const Floor = ({ floorNumber }) => {
  return (
    <div className="floor">
      <h2 className='floor__number__heading'> Floor {floorNumber} </h2>
    </div>
  );
};

export default Floor;
