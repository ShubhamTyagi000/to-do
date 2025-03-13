import React, { useContext } from "react";
import todoContext from "../context/todoContext";

export default function LeftPane() {
  const { todos, setTodos } = useContext(todoContext);
  console.log("todos", todos);
  const handleChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    localStorage.setItem("yourtodos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <div className="w-full sm:w-1/2 bg-red-100 p-6 rounded-lg shadow-lg">
      {todos.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          No tasks found. Add some!
        </div>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-yellow-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all ease-in-out duration-200 flex justify-between items-center"
            >
              <div className="flex items-center">
                <label
                  className={`text-lg ${
                    todo.isDone ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.todo}
                </label>
              </div>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleChange(index)}
                className="w-5 h-5 rounded border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
