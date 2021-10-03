export const fetchData = () => {
  function getStarships(url = "https://swapi.co/api/starships", starships = []) {
    return new Promise((resolve, reject) =>
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw `${response.status}: ${response.statusText}`;
          }
          response
            .json()
            .then((data) => {
              starships = starships.concat(data.results);

              if (data.next) {
                getStarships(data.next, starships).then(resolve).catch(reject);
              } else {
                resolve(starships);
              }
            })
            .catch(reject);
        })
        .catch(reject)
    );
  }

  const starships = getStarships("https://swapi.dev/api/starships").then((data) => data);
  return starships;
};
