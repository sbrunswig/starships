import { useEffect, useState } from "react";
import { fetchData } from "./utils/api";
import SWTable from "./components/SWTable";

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData().then((response) => {
      setStarships(response);
      setFilteredStarships(response);
      const allMan = response
        .map((starship) => starship.manufacturer)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort();
      setManufacturers(allMan);
      console.log(response);
      setIsLoaded(true);
    });
  }, []);

  let handleStarshipChange = (e) => {
    const findStarships =
      e.target.value === "all"
        ? starships
        : starships.filter((starship) => starship.manufacturer === e.target.value);
    setFilteredStarships(findStarships);
    console.log(findStarships);
  };

  return (
    <div>
      Starship App
      <select onChange={handleStarshipChange}>
        <option value="all"> -- Select a manufacturer -- </option>
        {manufacturers.map((manufacturer, index) => (
          <option key={index} value={manufacturer}>
            {manufacturer}
          </option>
        ))}
      </select>
      {isLoaded ? <SWTable starships={filteredStarships} /> : <div>Loading</div>}
    </div>
  );
}

export default App;
