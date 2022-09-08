import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import movieApi from "./api/movieApi";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await movieApi.get("/", { params: { q: text } });
    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="dark:bg-gray-900 m-0 w-full h-screen">
      <div class="container mx-auto px-4">
        <h3 className="text-center text-xl font-medium leading-6 text-gray-100 pt-10 pb-10">
          Search your Movies
        </h3>
        <div className="items-center">
          <SearchBar onSearch={onSearch} />
        </div>
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default App;
