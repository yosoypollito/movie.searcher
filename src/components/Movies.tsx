import type { Movies } from "@/src/types";

import Movie from "./Movie";

export default function Movies({ movies }: { movies: Movies }) {
  const hasMovies = movies?.length > 0;
  return (
    <>
      {hasMovies ? (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] w-full gap-4 justify-items-center p-2">
          {movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </div>
      ) : (
        <>No movies found</>
      )}
    </>
  );
}
