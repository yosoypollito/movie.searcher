import type { Movies } from "@/src/types";

import Movie from "./Movie";

export default function Movies({ movies }: { movies: Movies }) {
  return (
    <>
      {movies.length === 0 ? (
        <>No movies found</>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] w-full gap-4 justify-items-center p-2">
          {movies.map((movie) => {
            return <Movie {...movie} />;
          })}
        </div>
      )}
    </>
  );
}
