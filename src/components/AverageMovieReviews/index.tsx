import styles from "./styles.module.css";

import IconStar from "../icons/IconStar";

export default function AverageMovieReviews({
  children,
}: {
  children: string;
}) {
  return (
    <div className={styles.wrapper}>
      <IconStar />
      <span>{children}</span>
    </div>
  );
}
