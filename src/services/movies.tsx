import type { Movie } from "../types";

export const searchMovies = async ({ search }: { search: string }) => {
  if (search === "") return null;

  const { VITE_OMD_API_URL, VITE_OMD_API_KEY } = import.meta.env;

  try {
    const { Search } = await fetch(
      `${VITE_OMD_API_URL}/?apikey=${VITE_OMD_API_KEY}&s=${search}`
    ).then((r) => r.json());

    if (!Search) {
      return [];
    }

    return Search.map((movie: Movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
