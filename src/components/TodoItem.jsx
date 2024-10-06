/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Switch } from "./ui/switch";
import { editTodo, removeTodo, toggleTodo } from "@/actions/actions";
import { Button } from "./ui/button";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
import { useState } from "react";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(todo.text);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditTodoOnClick = () => {
    if (editedText.trim() !== "") {
      dispatch(editTodo(index, editedText.trim()));
    }
  };
  return (
    <li className="flex items-center justify-between mt-3 bg-white w-full rounded-xl shadow-sm p-3">
      <div className="flex items-center gap-2">
        <Switch
          checked={todo.completed}
          onCheckedChange={() => dispatch(toggleTodo(index))}
        />
        <span
          className={` ${
            todo.completed ? "text-blue-500 line-through  " : "text-gray-400"
          } text-lg  `}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="bg-green-500 hover:bg-green-600">
              <CiEdit className="w-5 h-5" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Edit Your Todo</AlertDialogTitle>
              <AlertDialogDescription>
                <Input value={editedText} onChange={handleInputChange} />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleEditTodoOnClick}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={() => {
            dispatch(removeTodo(index));
          }}
        >
          <FaTrashAlt />
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
