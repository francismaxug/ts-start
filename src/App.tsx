import React, { useState } from "react";
import Todo from "./components/Todo";
import TaskInput from "./components/TaskInput";
import TodoContext from "./context/TodoContext";

function App() {
 
  return (
    <TodoContext>
      <TaskInput />
      <Todo  />
    </TodoContext>
  );
}

export default App;