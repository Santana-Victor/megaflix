import { useState, useEffect } from "react";

import { IMovieDetailsProps } from "../interfaces/TmdbDataProps";

export default function useGetMovieDetails({ url }: { url: string }) {
  const [movieData, setMovieData] = useState<IMovieDetailsProps | null>();

  const getMovieDetails = async (url: string) => {
    const response: IMovieDetailsProps = await fetch(url).then((response) =>
      response.json()
    );
    setMovieData(response);
  };

  useEffect(() => {
    getMovieDetails(url);
  }, [url]);

  return { movieData };
}
