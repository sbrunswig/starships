import { render, screen } from "@testing-library/react";
import SwTable from "./../components/SwTable";

test("renders table element", () => {
  render(<SwTable />);
  const tableElement = screen.queryAllByText("table");
  expect(tableElement).toBeTruthy();
});
