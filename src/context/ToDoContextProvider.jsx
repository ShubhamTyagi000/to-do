import { useState } from "react";
import todoContext from "./todoContext";

const ToDoContextProvider = ({ children }) => {
  // console.log("ts", typeof (localStorage.getItem("yourtodos")));
  // console.log("todos", localStorage.getItem("yourtodos")[0]);
  const [todos, setTodos] = useState(() =>  JSON.parse(localStorage.getItem('yourtodos')) || [] );

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
};

export default ToDoContextProvider;
