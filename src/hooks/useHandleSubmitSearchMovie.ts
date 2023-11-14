import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function useHandleSubmitSearchMovie() {
  const [searchMovie, setSearchMovie] = useState("");
  const navigate = useNavigate();

  const handleSubmitSearchMovie = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchMovie) return;
    navigate(`/search?q=${searchMovie}`);
    setSearchMovie("");
  };

  return { searchMovie, setSearchMovie, handleSubmitSearchMovie };
}
