import useFormatCurrency from "../../hooks/useFormatCurrency";

import styles from "./styles.module.css";

import MovieImage from "../MovieImage";
import MovieTitle from "../MovieTitle";

import { IMovieDetailsProps } from "../../interfaces/TmdbDataProps";

type MovieDetailsProps = {
  movieData: IMovieDetailsProps;
};

const apiUrlImage = import.meta.env.VITE_IMG;

export default function MovieDetails({ movieData }: MovieDetailsProps) {
  const { formatCurrency } = useFormatCurrency();

  return (
    <>
      <div className={styles.movie_container}>
        <MovieImage
          imageUrl={apiUrlImage + movieData.poster_path}
          alt={movieData.title}
        />
        <MovieTitle>{movieData.title}</MovieTitle>
      </div>
      <div className={styles.container}>
        <p className={styles.tagline}>{movieData.tagline}</p>
        <div className={styles.info}>
          <h3>Budget:</h3>
          <p>{formatCurrency(movieData.budget)}</p>
        </div>
        <div className={styles.info}>
          <h3>Revenue:</h3>
          <p>{formatCurrency(movieData.revenue)}</p>
        </div>
        <div className={styles.info}>
          <h3>Duration:</h3>
          <p>{movieData.runtime} minutes</p>
        </div>
        <div className={styles.info}>
          <h3>Description:</h3>
          <p className={styles.description}>{movieData.overview}</p>
        </div>
      </div>
    </>
  );
}
