import React from "react";

const SWTable = ({ starships }) => {
  return (
    <table>
      <caption>Star Wars Starships</caption>
      <thead>
        <tr>
          <th>Starship</th>
        </tr>
      </thead>
      <tbody>
        {starships.map((starship) => {
          return (
            <tr key={starship.name}>
              <td>{starship.name}</td>
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
