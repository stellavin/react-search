import { reneder, screen, cleanup, render } from "@testing-library/react";
import SearchBar from "../SearchBar";

test("Should render SearcBar Component", () => {
  render(<SearchBar />);
  const searchBarElement = screen.getByTestId("search");
  expect(searchBarElement).toBeInTheDocument();
});
