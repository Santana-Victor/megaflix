import { useSearchParams } from "react-router-dom";

import Main from "../../components/Main";
import Title from "../../components/Title";
import ContainerMovieCards from "../../components/ContainerMovieCards";
import MovieCard from "../../components/MovieCard";

import useGetMovies from "../../hooks/useGetMovies";
import Header from "../../components/Header";

const apiKey = import.meta.env.VITE_API_KEY;
const searchUrl = import.meta.env.VITE_SEARCH;

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { movies } = useGetMovies({
    url: `${searchUrl}?${apiKey}&query=${query}`,
  });

  return (
    <>
      <Header />
      <Main>
        <Title>Search results for {query}</Title>
        <ContainerMovieCards>
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </ContainerMovieCards>
      </Main>
    </>
  );
}
