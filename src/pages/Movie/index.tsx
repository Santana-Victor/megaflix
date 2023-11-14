import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import MovieContainer from "../../components/MovieContainer";
import MovieDetails from "../../components/MovieDetails";

import useGetMovieDetails from "../../hooks/useGetMovieDetails";

const apiUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {
  const { id } = useParams();
  const { movieData } = useGetMovieDetails({ url: `${apiUrl}${id}?${apiKey}` });

  return (
    <>
      <Header />
      <MovieContainer>
        {movieData && (
          <>
            <MovieDetails movieData={movieData} />
          </>
        )}
      </MovieContainer>
    </>
  );
}
