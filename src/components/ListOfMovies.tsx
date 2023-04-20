import type { Movies } from "@/src/types";
import Movie from "@/components/Movie";

export default function ListOfMovies({ movies }: { movies: Movies }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] w-full gap-4 justify-items-center p-2">
      {movies.map((movie) => {
        return <Movie {...movie} />;
      })}
    </div>
  );
}
