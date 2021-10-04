import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders main element", () => {
  render(<App />);
  const appElement = screen.queryAllByText("main");
  expect(appElement).toBeTruthy();
});
