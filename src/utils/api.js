/* swapi is a page based api, in order to get all starships have to stich all calls together */
export const fetchData = () => {
  function fetchStarships(url = "https://swapi.dev/api/starships", starships = []) {
    return new Promise((resolve, reject) =>
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("error");
          }
          response
            .json()
            .then((data) => {
              starships = starships.concat(data.results);
              /* if there are more pages in api, make recursive call */
              if (data.next) {
                fetchStarships(data.next, starships).then(resolve).catch(reject);
              } else {
                resolve(starships);
              }
            })
            .catch(reject);
        })
        .catch(reject)
    );
  }
  return fetchStarships().then((data) => data);
};
