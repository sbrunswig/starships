import React from "react";
import "./select.css";

const SwSelect = (props) => {
  const handleStarshipChange = (e) => {
    props.filterStarship(e.target.value);
  };
  return (
    <div className="d-f pos-r ov-h select">
      <select className="bgc-gray900 c-white p- w-1/1" onChange={handleStarshipChange} tabIndex="0">
        <option value="All"> -- Select a manufacturer -- </option>
        {props.manufacturers &&
          props.manufacturers.map((manufacturer, index) => (
            <option key={index} value={manufacturer}>
              {manufacturer}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SwSelect;
