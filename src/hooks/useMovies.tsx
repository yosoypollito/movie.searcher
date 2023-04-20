import type { Movies, Movie } from "@/src/types";
import { useState } from "react";

export default function useMovies({ search }: { search: string }) {
  const [responseMovies, setResponseMovies] = useState([]);

  const movies = responseMovies;

  const mappedMovies = movies.map((movie: Movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type,
  }));

  const getMovies = async () => {
    if (!search) {
      setResponseMovies([]);
      return;
    }

    const { VITE_OMD_API_URL, VITE_OMD_API_KEY } = import.meta.env;

    const { Search } = await fetch(
      `${VITE_OMD_API_URL}/?apikey=${VITE_OMD_API_KEY}&s=${search}`
    ).then((r) => r.json());

    if (!Search) {
      setResponseMovies([]);
    }

    setResponseMovies(Search);

    //TODO get movies
  };

  return { movies: mappedMovies, getMovies };
}
