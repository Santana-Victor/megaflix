import styles from "./styles.module.css";

import MovieImage from "../MovieImage";
import MovieTitle from "../MovieTitle";
import AverageMovieReviews from "../AverageMovieReviews";
import MovieDetailsButton from "../MovieDetailsButton";

import { IMoviePreviewProps } from "../../interfaces/TmdbDataProps";

type MovieCardProps = {
  movie: IMoviePreviewProps;
  buttonDetails?: boolean;
};

const apiUrlImage = import.meta.env.VITE_IMG;

export default function MovieCard({
  movie,
  buttonDetails = true,
}: MovieCardProps) {
  return (
    <div className={styles.movie_container}>
      <MovieImage
        imageUrl={apiUrlImage + movie.poster_path}
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
      <AverageMovieReviews>{movie.vote_average.toFixed(2)}</AverageMovieReviews>
      {buttonDetails && (
        <MovieDetailsButton movieId={movie.id}>Details</MovieDetailsButton>
      )}
    </div>
  );
}
