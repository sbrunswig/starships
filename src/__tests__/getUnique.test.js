import { getUnique } from "./../utils/getUnique";

const testData = [
  { piece: "plate", color: "red" },
  { piece: "brick", color: "red" },
  { piece: "tile", color: "blue" },
];

const emptyData = [];

test("filters unique values from array of objects by key", () => {
  expect(getUnique(testData, "color").length).toEqual(2);
  expect(getUnique(testData, "piece").length).toEqual(3);
  expect(getUnique(emptyData, "piece").length).toEqual(0);
});
