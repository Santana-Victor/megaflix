import styles from "./styles.module.css";

export default function MovieTitle({ children }: { children: string }) {
  return <h2 className={styles.movie_title}>{children}</h2>;
}
