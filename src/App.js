import React, { useEffect, useState } from "react";
import { fetchData } from "./utils/api";
import SWSelect from "./components/SWSelect";
import SWTable from "./components/SWTable";
import "./styles/App.scss";

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  /* on page load go get the data from api */
  useEffect(() => {
    fetchData()
      .then((response) => {
        setStarships(response);
        setFilteredStarships(response);
        const allMan = response
          .map((starship) => starship.manufacturer)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort();
        setManufacturers(allMan);
        console.log(response);
        setIsLoaded(true);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  /* user selects a manufacturer from dropdown */
  let filterStarship = (manufacturer) => {
    const findStarships =
      manufacturer === "all"
        ? starships
        : starships.filter(
            (starship) => starship.manufacturer === manufacturer
          );
    setFilteredStarships(findStarships);
    console.log(findStarships);
  };

  return (
    <div>
      {isError && (
        <div>
          Don’t be too proud of this technological terror you’ve constructed.
          The ability to destroy a planet is insignificant next to the power of
          the Force.
        </div>
      )}
      {isLoaded ? (
        <SWSelect
          manufacturers={manufacturers}
          filterStarship={filterStarship}
        />
      ) : (
        <div>Loading</div>
      )}
      {isLoaded ? (
        <SWTable starships={filteredStarships} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
