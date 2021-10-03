import React from "react";

const SWSelect = (props) => {
  const handleStarshipChange = (e) => {
    props.filterStarship(e.target.value);
  };
  return (
    <div class="d-f pos-r ov-h select">
      <select class="bgc-gray900 c-white p- w-1/1" onChange={handleStarshipChange}>
        <option value="All"> -- Select a manufacturer -- </option>
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
