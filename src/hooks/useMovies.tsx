import { useState } from "react";
import { searchMovies } from "../services/movies";

export default function useMovies({ search }: { search: string }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const searchedMovies = await searchMovies({ search });
    setMovies(searchedMovies);
  };

  return { movies, getMovies };
}
