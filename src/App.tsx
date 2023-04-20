import Button from "@/components/Button";
import Movies from "@/components/Movies";
import useMovies from "@/hooks/useMovies";
import useSearch from "@/hooks/useSearch";
import Loading from "@/components/Loading";

function App() {
  const { search, updateSearch, error } = useSearch();
  const {
    movies,
    getMovies,
    loading,
    error: MoviesError,
  } = useMovies({ search });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies();
  };

  return (
    <div className="grid justify-center items-center min-h-screen w-full grid-cols-1 grid-rows-[min-content_1fr] gap-8 py-4">
      <header className="flex flex-col justify-center gap-4 items-center">
        <h1 className="text-white text-3xl font-semibold">Movie Searcher</h1>

        <form
          className="flex w-96 flex-row gap-1 justify-center"
          onSubmit={handleSubmit}
        >
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
        </form>
      </header>

      <main className="flex w-full justify-center self-start">
        {loading ? <Loading /> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
