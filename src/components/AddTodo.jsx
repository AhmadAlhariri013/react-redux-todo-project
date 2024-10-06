import { LuListTodo } from "react-icons/lu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/actions/actions";

const AddTodo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodoOnClick = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText.trim()));
      setTodoText("");
    }
  };
  return (
    <div className="flex items-center justify-between mb-6 gap-3 mx-6">
      <Input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo..."
        className="bg-gray-50 py-5 border-gray-300 focus:border-primary focus:outline-none shadow-sm"
      />
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="shadow-sm hover:bg-green-500 transition-all w-20 "
        onClick={handleAddTodoOnClick}
      >
        {isHovered ? (
          <LuListTodo className="w-5 h-5 " />
        ) : (
          <span>Add Todo</span>
        )}
      </Button>
    </div>
  );
};

export default AddTodo;
