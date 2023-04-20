import Button from "@/components/Button";
import Movies from "@/components/Movies";
import useMovies from "@/hooks/useMovies";
import useSearch from "@/hooks/useSearch";
import Loading from "@/components/Loading";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();
  const {
    movies,
    getMovies,
    loading,
    error: MoviesError,
  } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      getMovies({ search });
    }, 300),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const toggleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies({ search });
  };

  return (
    <div className="grid justify-center items-center min-h-screen w-full grid-cols-1 grid-rows-[min-content_1fr] gap-8 py-4">
      <header className="flex flex-col justify-center gap-4 items-center">
        <h1 className="text-white text-3xl font-semibold">Movie Searcher</h1>

        <form
          className="flex w-96 flex-col gap-5 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row w-full gap-2">
            <div className="flex flex-col w-full relative">
              <input
                className="rounded-xl px-2 py-0.5 w-full border-2 border-zinc-400 bg-transparent text-zinc-100 outline-none"
                placeholder="Avengers, Horror, Saw ..."
                onChange={handleChange}
                value={search}
              />
              {error && (
                <p className="absolute top-full left-2 text-xs text-red-500 font-semibold">
                  {error}
                </p>
              )}
            </div>
            <Button type="submit">Buscar</Button>
          </div>
          <label className="flex flex-row gap-1 text-xs w-fit">
            <input type="checkbox" onChange={toggleSort} checked={sort} />
            Sort by title
          </label>
        </form>
      </header>

      <main className="flex w-full justify-center self-start">
        {loading ? <Loading /> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
