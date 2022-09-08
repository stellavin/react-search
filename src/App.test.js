import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Search Your Movies", () => {
  render(<App />);
  const linkElement = screen.getByText(/Search Your Movies/i);
  expect(linkElement).toBeInTheDocument();
});
