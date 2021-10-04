import { render, screen } from "@testing-library/react";
import SwLoader from "./../components/SwLoader";

test("renders div element", () => {
  render(<SwLoader />);
  const divElement = screen.queryAllByText("div");
  expect(divElement).toBeTruthy();
});
