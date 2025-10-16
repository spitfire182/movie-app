"use client";

import { useState } from "react";
import { Movie } from "@/types";
import MovieDetails from "./MovieDetails";
import MovieListItem from "./MovieListItem";
import Modal from "../ui/Modal";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-l font-bold mb-6 text-left">
        Most popular
      </h2>

      <ul className="flex flex-col gap-2">
        {movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedMovieId(movie.id)}
          />
        ))}
      </ul>

      <Modal
        isOpen={!!selectedMovieId}
        onClose={() => setSelectedMovieId(null)}
      >
        {selectedMovieId && <MovieDetails movieId={selectedMovieId} />}
      </Modal>
    </div>
  );
}
