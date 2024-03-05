import React, { useContext } from "react";
import NewTodo from "../models/todo";
import TodoListItem from "./TodoListItem";
import { useContextHook } from "../context/TodoContext";


const Todo = () => {

  const ctx = useContextHook()
  return (
    <ul>
      {ctx.todoo.map((list) => (
     
          <TodoListItem key={list.id} listItem={list} deletes={()=>ctx.deletes(list.id)} />
     
      ))}
    </ul>
  );
};

export default Todo;