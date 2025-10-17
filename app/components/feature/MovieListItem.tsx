import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { getImageUrl } from "@/services/movieService";
import { Movie } from "@/types";
import { getYearFromDate } from "@/utils/date";

interface MovieListItemProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieListItem({ movie, onClick }: MovieListItemProps) {
  const releaseYear = getYearFromDate(movie.release_date);

  return (
    <li
      className="flex flex-row gap-6 rounded-xl border border-neutral-200"
      onClick={onClick}
    >
      {movie.poster_path ? (
        <Image
          src={getImageUrl(movie.poster_path)}
          alt={`Poster for ${movie.title}`}
          width={72}
          height={99}
          className="rounded-xl object-cover"
        />
      ) : (
        <div>No Image</div>
      )}
      <div className="flex flex-col gap-6 justify-center">
        <h3 className="text-m font-bold">{movie.title}</h3>
        <div className="flex items-center gap-2">
          <div className="text-s">
            <FaRegCalendar />
          </div>
          <p className="text-s">{releaseYear}</p>
        </div>
      </div>
    </li>
  );
}
