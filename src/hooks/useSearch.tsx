import { useEffect, useRef, useState } from "react";

export default function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState<null | string>(null);

  const isFirstRender = useRef(true);

  const updateSearch = (newSearch: string) => {
    //This validate string and prevent not allowed characters
    if (newSearch.startsWith(" ")) {
      return;
    }

    setSearch(newSearch);
  };

  useEffect(() => {
    //This update errors
    if (isFirstRender.current) {
      isFirstRender.current = search === "";
      return;
    }

    if (search === "") {
      return setError("Cant search a blank movie");
    }

    if (search.length < 3) {
      return setError("Must be at least 3 characters");
    }
    setError(null);
  }, [search]);

  return {
    search,
    updateSearch,
    error,
  };
}
