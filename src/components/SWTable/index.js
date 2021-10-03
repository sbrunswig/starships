import React from "react";

const SWTable = ({ starships }) => {
  return (
    <table class="w-1/1">
      <caption class="d-n">Star Wars Starships</caption>
      <thead>
        <tr>
          <th class="bgc-gray900 p- ta-l">Starship</th>
          <th class="bgc-gray900 p- ta-l">Class</th>
          <th class="bgc-gray900 p- ta-l">Length</th>
        </tr>
      </thead>
      <tbody>
        {starships.map((starship, index) => {
          return (
            <tr key={starship.name}>
              <td class={`p- va-t ${index % 2 ? "bgc-gray800" : "bgc-gray700"}`}>
                {starship.name}
              </td>
              <td class={`p- va-t ${index % 2 ? "bgc-gray800" : "bgc-gray700"}`}>
                {starship.starship_class}
              </td>
              <td class={`p- va-t whs-nw ${index % 2 ? "bgc-gray800" : "bgc-gray700"}`}>
                {starship.length} m
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SWTable;
