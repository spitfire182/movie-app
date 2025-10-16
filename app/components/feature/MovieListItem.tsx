import Image from "next/image";
import { getImageUrl } from "@/services/movieService";
import { Movie} from "@/types";
import { getYearFromDate } from '@/utils/date';

interface MovieListItemProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieListItem({ movie, onClick }: MovieListItemProps) {
  const releaseYear = getYearFromDate(movie.release_date);

  return (
    <li
      onClick={onClick}
    >
      {movie.poster_path ? (
        <Image
          src={getImageUrl(movie.poster_path)}
          alt={`Poster for ${movie.title}`}
          width={50}
          height={75}
        />
      ) : (
        // Placeholder for movies without a poster
        <div>
          No Image
        </div>
      )}
      <div>
        <h3>{movie.title}</h3>
        <p>
          {releaseYear}
        </p>
      </div>
    </li>
  );
}
