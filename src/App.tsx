import Button from "@/components/Button";
import Movies from "@/components/Movies";
import useMovies from "@/hooks/useMovies";
import useSearch from "@/hooks/useSearch";

function App() {
  const { movies } = useMovies();

  const { search, updateSearch, error } = useSearch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center gap-4 items-center h-screen w-full">
      <header className="flex flex-col justify-center gap-4 items-center">
        <h1 className="text-white text-3xl font-semibold">Movie Searcher</h1>

        <form
          className="flex w-96 flex-row gap-1 items-center justify-center"
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

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
