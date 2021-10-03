import React from "react";

const SWSelect = (props) => {
  const handleStarshipChange = (e) => {
    props.filterStarship(e.target.value);
  };
  return (
    <div class="d-f pos-r w-1/1 select">
      <select class="bgc-gray900 c-white p-" onChange={handleStarshipChange}>
        <option value="all"> -- Select a manufacturer -- </option>
        {props.manufacturers.map((manufacturer, index) => (
          <option key={index} value={manufacturer}>
            {manufacturer}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SWSelect;
