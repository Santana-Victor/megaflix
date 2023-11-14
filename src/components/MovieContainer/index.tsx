import styles from "./styles.module.css";

export default function MovieContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.wrapper}>{children}</div>;
}
