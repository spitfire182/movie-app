import { MovieDetails, PopularMoviesResponse } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Helper to construct image URLs
export const getImageUrl = (path: string) => `${IMAGE_BASE_URL}${path}`;

// Fetches the list of popular movies
export const getPopularMovies = async (): Promise<PopularMoviesResponse> => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return res.json();
};

// Fetches the details for a single movie by its ID
export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return res.json();
};
