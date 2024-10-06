import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTodos,
  markAllCompleted,
  updateSearchTerm,
} from "@/actions/actions";
import TodoList from "./TodoList";

const FilterAndSearch = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleSelectChange = (value) => {
    dispatch(filterTodos(value));
  };

  const handleMarkAllCompletedOnClick = () => {
    dispatch(markAllCompleted());
  };

  const handleSearchInput = (event) => {
    dispatch(updateSearchTerm(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-between mb-6 mx-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 mb-6 w-full">
        {/* Mark All Todos as Completed */}
        <Button className="shadow-sm " onClick={handleMarkAllCompletedOnClick}>
          Mark All Completed
        </Button>

        {/* Search Input */}
        <div className="flex items-center gap-3 relative  w-1/2">
          <Input
            onChange={handleSearchInput}
            placeholder="Search..."
            className="bg-gray-50 py-5 border-gray-300 focus:border-primary focus:outline-none shadow-sm"
          />
          <div className="absolute right-0 shadow-sm bg-primary p-2 px-3 text-white rounded-r-md">
            <Search />
          </div>
        </div>
      </div>

      {/* Filter Select Input */}

      <Tabs
        defaultValue={currentFilter}
        className="w-full"
        onValueChange={handleSelectChange}
      >
        <TabsList>
          <TabsTrigger value="ALL">Default</TabsTrigger>
          <TabsTrigger value="INCOMPLETE">Incomplete</TabsTrigger>
          <TabsTrigger value="COMPLETED">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="ALL">
          <TodoList />
        </TabsContent>
        <TabsContent value="INCOMPLETE">
          <TodoList />
        </TabsContent>
        <TabsContent value="COMPLETED">
          <TodoList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FilterAndSearch;
