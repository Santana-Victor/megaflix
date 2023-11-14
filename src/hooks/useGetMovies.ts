import { useState, useEffect } from "react";

import {
  IMoviePreviewProps,
  IResponseMoviesTopRatedProps,
} from "../interfaces/TmdbDataProps";

export default function useGetMovies({ url }: { url: string }) {
  const [movies, setMovies] = useState<IMoviePreviewProps[]>([]);

  const getMovies = async (url: string) => {
    const response: IResponseMoviesTopRatedProps = await fetch(url).then(
      (response) => response.json()
    );
    setMovies(response.results);
  };

  useEffect(() => {
    getMovies(url);
  }, [url]);

  return { movies };
}
