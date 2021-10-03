export const fetchData = () => {
  function getStarships(
    url = "https://swapi.dev/api/starships",
    starships = []
  ) {
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

  const starships = getStarships().then((data) => data);
  return starships;
};
