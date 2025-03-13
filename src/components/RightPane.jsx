import { useContext, useState } from "react";
import todoContext from "../context/todoContext";

export default function RightPane() {
  const { todos, setTodos } = useContext(todoContext);
  const [inputValue, setInputValue] = useState("");
  const addToDo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    let obj = {
      todo: inputValue,
      isDone: false
    }
    let updatedTodos = [...todos, obj];
    console.log('updatedTodos', updatedTodos)
    setTodos(updatedTodos);
    localStorage.setItem("yourtodos", JSON.stringify(updatedTodos));
    console.log('string', JSON.stringify(updatedTodos))
    setInputValue("");
  };

  return (
    <form
      onSubmit={addToDo}
      className="w-full sm:w-1/2 bg-green-200 p-8 rounded-lg shadow-lg flex flex-col space-y-4"
    >
      <input
        type="text"
        value={inputValue}
        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="Type your to-do here..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Add ToDo
      </button>
    </form>
  );
}
