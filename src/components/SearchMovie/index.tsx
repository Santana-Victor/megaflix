import styles from "./styles.module.css";

import IconSearch from "../icons/IconSearch";

import useHandleSubmitSearchMovie from "../../hooks/useHandleSubmitSearchMovie";

export default function SearchMovie() {
  const { searchMovie, setSearchMovie, handleSubmitSearchMovie } =
    useHandleSubmitSearchMovie();

  return (
    <form className={styles.form} onSubmit={handleSubmitSearchMovie}>
      <input
        className={styles.input}
        type={"text"}
        placeholder={"Enter the movie title"}
        onChange={(event) => setSearchMovie(event.target.value)}
        value={searchMovie}
      />
      <button type={"submit"} className={styles.button}>
        <IconSearch />
      </button>
    </form>
  );
}
