import { Link } from "react-router-dom";

import styles from "./styles.module.css";

type MovieDetailsButtonProps = {
  children: string;
  movieId: number;
};

export default function MovieDetailsButton({
  children,
  movieId,
}: MovieDetailsButtonProps) {
  return (
    <Link to={`/movie/${movieId}`} className={styles.movie_details_button}>
      {children}
    </Link>
  );
}
