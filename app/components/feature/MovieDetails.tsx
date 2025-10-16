"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegCalendar, FaRegStar } from "react-icons/fa";
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
    <div className="md:grid md:grid-cols-5 md:gap-6 md:p-6">
      <div>
        {movie.poster_path ? (
          <Image
            src={getImageUrl(movie.poster_path)}
            alt={`Poster for ${movie.title}`}
            width={165}
            height={180}
            className="rounded-xl object-cover"
          />
        ) : (
          <div>No Poster Available</div>
        )}
      </div>

      <div className="md:col-span-4">
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <div className="space-y-2 text-sm">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="text-s">
                <FaRegCalendar />
              </div>
              <p className="text-s">{releaseYear}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-s">
                <FaRegStar />
              </div>
              <p className="text-s">{movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
          <p className="mb-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
