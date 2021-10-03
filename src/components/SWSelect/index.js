import React from "react";

const SWSelect = (props) => {
  const handleStarshipChange = (e) => {
    props.filterStarship(e.target.value);
  };
  return (
    <select onChange={handleStarshipChange}>
      <option value="all"> -- Select a manufacturer -- </option>
      {props.manufacturers.map((manufacturer, index) => (
        <option key={index} value={manufacturer}>
          {manufacturer}
        </option>
      ))}
    </select>
  );
};

export default SWSelect;
