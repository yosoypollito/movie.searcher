import { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export default function useMovies({ search }: { search: string }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const prevSearch = useRef("");

  const getMovies = async () => {
    if (prevSearch.current === search) return;
    try {
      setLoading(true);
      setError(null);
      prevSearch.current = search;

      const searchedMovies = await searchMovies({ search });
      setMovies(searchedMovies);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, error, loading };
}
