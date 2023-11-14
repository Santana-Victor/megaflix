import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import SearchResults from "./pages/SearchResults";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/movie/:id"} element={<Movie />} />
        <Route path={"/search"} element={<SearchResults />} />
      </Routes>
    </>
  );
}
