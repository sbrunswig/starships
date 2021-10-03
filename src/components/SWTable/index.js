import React from "react";

const SWTable = ({ starships }) => {
  return (
    <table class="w-1/1">
      <caption class="d-n">Star Wars Starships</caption>
      <thead>
        <tr>
          <th class="bgc-gray900 p- ta-l">Starship</th>
        </tr>
      </thead>
      <tbody>
        {starships.map((starship, index) => {
          return (
            <tr key={starship.name}>
              <td class={`p- ${index % 2 ? "bgc-gray800" : "bgc-gray700"}`}>{starship.name}</td>
              {/* <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
                <td>{starship.cost_in_credits}</td>
                <td>{starship.length} meters</td>
                <td>{starship.passengers}</td>
                <td>{starship.max_atmosphering_speed}</td>
                <td>{starship.hyperdrive_rating}</td>
                <td>{starship.MGLT}</td>
                <td>{starship.cargo_capacity}</td>
                <td>{starship.consumables}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SWTable;
