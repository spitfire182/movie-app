// Movie object for the list view
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

// Movie details object
export interface MovieDetails extends Movie {
  overview: string;
  vote_average: number;
  genres: { id: number; name: string }[];
}

// Popular movies API response
export interface PopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
