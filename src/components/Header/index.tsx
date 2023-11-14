import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import SearchMovie from "../SearchMovie";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        Megaflix
      </Link>
      <SearchMovie />
    </header>
  );
}
