import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieListItem from "./MovieListItem";
import { getImageUrl } from "@/services/movieService";

// Mock the movie service module
jest.mock("@/services/movieService");
const mockGetImageUrl = getImageUrl as jest.Mock;

// Mock next/image to prevent errors
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("MovieListItem Component", () => {
  const mockMovie = {
    id: 123,
    title: "Fight Club",
    release_date: "1999-01-02",
    poster_path: "/fight_club.jpg",
    overview: "Description goes here...",
    vote_average: 8.8,
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the movie title and release year correctly", () => {
    render(<MovieListItem movie={mockMovie} onClick={mockOnClick} />);

    expect(
      screen.getByRole("heading", { name: "Fight Club" })
    ).toBeInTheDocument();
    expect(screen.getByText("1999")).toBeInTheDocument();
  });

  it("renders the movie poster and calls getImageUrl with the correct path", () => {
    mockGetImageUrl.mockReturnValue("http://app.url/fight_club.jpg");

    render(<MovieListItem movie={mockMovie} onClick={mockOnClick} />);

    expect(mockGetImageUrl).toHaveBeenCalledWith("/fight_club.jpg");
    expect(mockGetImageUrl).toHaveBeenCalledTimes(1);

    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute(
      "src",
      "http://app.url/fight_club.jpg"
    );
    expect(imageElement).toHaveAttribute("alt", "Poster for Fight Club");
  });

  it("calls the onClick handler when the list item is clicked", () => {
    render(<MovieListItem movie={mockMovie} onClick={mockOnClick} />);

    const listItem = screen.getByRole("listitem");
    fireEvent.click(listItem);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders a placeholder when there is no poster path", () => {
    const movieWithoutPoster = { ...mockMovie, poster_path: "" };
    render(<MovieListItem movie={movieWithoutPoster} onClick={mockOnClick} />);

    expect(screen.getByText("No Image")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();

    expect(mockGetImageUrl).not.toHaveBeenCalled();
  });
});
