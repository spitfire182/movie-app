import { FaFilm } from "react-icons/fa";
import MovieList from "./components/feature/MovieList";
import { getPopularMovies } from "@/services/movieService";

export default async function HomePage() {
  // Fetch data on the server
  const popularMoviesData = await getPopularMovies();
  const movies = popularMoviesData.results;

  return (
    <main className="container max-w-xl mx-auto px-4 py-8">
      <div className="flex justify-center w-full mb-[80px]">
        <div className="flex items-center gap-3">
          <div className="text-4xl">
            <FaFilm className="align-middle" />
          </div>
          <h1 className="text-5xl lowercase">Movies</h1>
        </div>
      </div>
      {/* MovieList is a Client Component that receives server-fetched data as props */}
      <MovieList movies={movies} />
    </main>
  );
}
