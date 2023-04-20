import type { Movies, Movie } from "@/src/types";

export default function useMovies() {
  const movies: Movies = [];

  const mappedMovies = movies.map((movie: Movie) => movie);

  return { movies: mappedMovies };
}
