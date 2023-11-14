import useGetMovies from "../../hooks/useGetMovies";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Title from "../../components/Title";
import ContainerMovieCards from "../../components/ContainerMovieCards";
import MovieCard from "../../components/MovieCard";

const apiUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const { movies } = useGetMovies({
    url: `${apiUrl}top_rated?${apiKey}`,
  });

  return (
    <>
      <Header />
      <Main>
        <Title>Best movies</Title>
        <ContainerMovieCards>
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </ContainerMovieCards>
      </Main>
    </>
  );
}
