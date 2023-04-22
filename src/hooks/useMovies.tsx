import type { Movies } from "../types";
import { useMemo, useRef, useState, useCallback } from "react";
import { searchMovies } from "../services/movies";

export default function useMovies({
  search,
  sort,
}: {
  search: string;
  sort: boolean;
}) {
  const [movies, setMovies] = useState<Movies>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const prevSearch = useRef("");

  const getMovies = useCallback(async ({ search }: { search: string }) => {
    if (search === "") return;

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
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, error, loading };
}
