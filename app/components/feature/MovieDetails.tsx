"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getImageUrl, getMovieDetails } from "@/services/movieService";
import { MovieDetails } from "@/types";
import { getYearFromDate } from "@/utils/date";

interface MovieDetailsProps {
  movieId: number;
}

export default function MovieDetailsView({ movieId }: MovieDetailsProps) {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return null;

  const releaseYear = getYearFromDate(movie.release_date);

  return (
    <div className="md:grid md:grid-cols-3 md:gap-8">
      <div>
        {movie.poster_path ? (
          <Image
            src={getImageUrl(movie.poster_path)}
            alt={`Poster for ${movie.title}`}
            width={300}
            height={450}
          />
        ) : (
          <div>No Poster Available</div>
        )}
      </div>

      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
        <p className="mb-4">{movie.overview}</p>
        <div className="space-y-2 text-sm">
          <p>{releaseYear}</p>
          <p>{movie.vote_average.toFixed(1)} / 10</p>
        </div>
      </div>
    </div>
  );
}
