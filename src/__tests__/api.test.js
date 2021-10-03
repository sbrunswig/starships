import { fetchData } from "./../utils/api";

test("calls api to get starships with a promise", () => {
  return fetchData().then((data) => {
    expect(data.length).toEqual(36);
    expect(data.length).not.toEqual(42);
  });
});
