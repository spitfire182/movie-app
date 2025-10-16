import MovieList from "./components/feature/MovieList";
import { getPopularMovies } from "@/services/movieService";

export default async function HomePage() {
  // Fetch data on the server
  const popularMoviesData = await getPopularMovies();
  const movies = popularMoviesData.results;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-black lowercase">Movies</h1>
      <h2 className="text-2xl font-bold mb-6 text-left text-black">Most popular</h2>
      {/* MovieList is a Client Component that receives server-fetched data as props */}
      <MovieList movies={movies} />
    </main>
  );
}
