import React, { useState } from "react";
import Todo from "./components/Todo1";
import NewTodo from "./models/todo";
import TaskInput from "./components/TaskInput1";
type Send = NewTodo[];
function App() {
  const [todoo, setTodo] = useState<Send>([]);
  // const items1 = [new NewTodo("Learn React"), new NewTodo("Lorem NodeJs")];

  const takeFxn = (todo: string) => {
    const addNewTodo: any = [...todoo, new NewTodo(todo)];
    setTodo(addNewTodo);
  };

  const deletes=(id:string)=>{
const filterOut = todoo.filter(x=>x.id !== id);
setTodo(filterOut);
  }
  return (
    <div>
      <TaskInput takeFxn={takeFxn} />
      <Todo items={todoo} deletes={deletes} />
    </div>
  );
}

export default App;
