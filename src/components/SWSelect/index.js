import React from "react";

const SWSelect = (props) => {
  const handleStarshipChange = (e) => {
    props.filterStarship(e.target.value);
  };
  return (
    <div class="d-f ov-h pos-r w-20r select">
      <select class="bgc-gray900 c-white p-" onChange={handleStarshipChange}>
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
