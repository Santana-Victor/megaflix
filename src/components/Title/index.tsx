import styles from "./styles.module.css";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.title}>{children}</h2>;
}
