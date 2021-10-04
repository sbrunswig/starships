import React from "react";

const SwTable = ({ starships }) => {
  return (
    <table className="w-1/1">
      <caption className="d-n">Star Wars Starships</caption>
      <thead>
        <tr>
          <th className="bgc-gray900 p- ta-l">Starship</th>
          <th className="bgc-gray900 p- ta-l">Class</th>
          <th className="bgc-gray900 p- ta-l">Length</th>
        </tr>
      </thead>
      <tbody>
        {starships &&
          starships.map((starship, index) => {
            return (
              <tr key={starship.name}>
                <td className={`p- va-t ${index % 2 ? "bgc-gray800" : "bgc-gray700"}`}>
                  {starship.name}
                </td>
                <td className={`p- va-t ${index % 2 ? "bgc-gray800" : "bgc-gray700"}`}>
                  {starship.starship_class}
                </td>
                <td className={`p- va-t whs-nw ${index % 2 ? "bgc-gray800" : "bgc-gray700"}`}>
                  {starship.length} m
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default SwTable;
