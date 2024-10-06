import AddTodo from "./components/AddTodo";
import FilterAndSearch from "./components/FilterAndSearch";

function App() {
  return (
    <div className="max-w-4xl bg-gray-200 mx-auto sm:mt-8 p-4 rounded">
      <h2 className="text-2xl font-bold text-center mt-3 mb-6 uppercase">
        My Todos
      </h2>
      {/* Add Todo Section */}
      <AddTodo />

      {/* Search And Filter Section */}

      <FilterAndSearch />
    </div>
  );
}

export default App;
