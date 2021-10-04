import React, { useEffect, useState } from "react";
import { fetchData } from "./utils/api";
import { getUnique } from "./utils/getUnique";
import SwLoader from "./components/SwLoader";
import SwSelect from "./components/SwSelect";
import SwTable from "./components/SwTable";
import "./styles/main.scss";

function App() {
  /* state variables */
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  /* on page load go get the data from api */
  useEffect(() => {
    fetchData()
      .then((response) => {
        const sortedStarships = response.sort((a, b) => (a.name > b.name ? 1 : -1));
        /* add all starships and filtered starships to state */
        setStarships(sortedStarships);
        setFilteredStarships(sortedStarships);
        /* add manufacturers to state */
        setManufacturers(getUnique(sortedStarships, "manufacturer"));
        /* all data is loaded */
        setIsLoaded(true);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  /* user selects a manufacturer from dropdown */
  const filterStarship = (manufacturer) => {
    /* add selected manufacturer to state */
    setSelectedManufacturer(manufacturer);
    /* filter down original starship array by passed in manufacturer */
    const findStarships =
      manufacturer === "All"
        ? starships
        : starships.filter((starship) => starship.manufacturer === manufacturer);
    /* add filtered starships to state */
    setFilteredStarships(findStarships);
  };

  return (
    <main className="ai-c d-f fxd-c p+">
      {isError && (
        <div>
          Don’t be too proud of this technological terror you’ve constructed. The ability to destroy
          a planet is insignificant next to the power of the Force.
        </div>
      )}
      {isLoaded ? (
        <div className="mb">
          <SwSelect manufacturers={manufacturers} filterStarship={filterStarship} />
        </div>
      ) : (
        <div className="mb w-1/1">
          <SwLoader />
        </div>
      )}
      {isLoaded && <div className="p- w-1/1 bgc-purple900">{selectedManufacturer}</div>}
      {isLoaded ? (
        <SwTable starships={filteredStarships} />
      ) : (
        <SwLoader style={{ height: "500px" }} />
      )}
    </main>
  );
}

export default App;
