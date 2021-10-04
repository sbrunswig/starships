import { render, screen } from "@testing-library/react";
import SwSelect from "./../components/SwSelect";

test("renders select element", () => {
  render(<SwSelect />);
  const selectElement = screen.queryAllByText("select");
  expect(selectElement).toBeTruthy();
});
