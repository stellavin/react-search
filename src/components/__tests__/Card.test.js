import { screen, cleanup, render } from "@testing-library/react";
import Card from "../Card";
import renderer from "react-test-renderer";

test("Should render Card Component with data", () => {
  const movie = {
    id: "a3614a1f-de11-4e15-8a41-50f8b01ba13c",
    name: "Spirited Away",
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
    rating: 8.6,
    duration: 7500,
    genres: ["animation", "adventure", "family"],
    releasedAt: "2003-03-27T22:00:00.000Z",
  };
  render(<Card movie={movie} />);
  const cardElement = screen.getByTestId("genre-1");
  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveTextContent("animation");
});

test("Card Component matches sanpshot", () => {
  const movie = {
    id: "a3614a1f-de11-4e15-8a41-50f8b01ba13c",
    name: "Spirited Away",
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
    rating: 8.6,
    duration: 7500,
    genres: ["animation", "adventure", "family"],
    releasedAt: "2003-03-27T22:00:00.000Z",
  };
  const tree = renderer.create(<Card movie={movie} />).toJSON;
  expect(tree).toMatchSnapshot();
});
