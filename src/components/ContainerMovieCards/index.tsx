import styles from "./styles.module.css";

export default function ContainerMovieCards({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container_movie_cards}>{children}</div>;
}
