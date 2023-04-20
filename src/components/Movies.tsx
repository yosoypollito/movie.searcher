import type { Movies } from "@/src/types";

import ListOfMovies from "@/components/ListOfMovies";

export default function Movies({ movies }: { movies: Movies }) {
  return (
    <>
      {movies.length === 0 ? (
        <>No movies found</>
      ) : (
        <ListOfMovies movies={movies} />
      )}
    </>
  );
}
