import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders a button", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});
