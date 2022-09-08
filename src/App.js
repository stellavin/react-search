import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="dark:bg-gray-900 m-0 w-full h-screen">
      <div class="container mx-auto px-4">
        <h3 className="text-center text-xl font-medium leading-6 text-gray-100 pt-10 pb-10">
          Search Movie
        </h3>
        <div className="items-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
