/* returns unique values from array of objects based on key */

export const getUnique = (data, key) => {
  return data
    .map((obj) => obj[key])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
};
