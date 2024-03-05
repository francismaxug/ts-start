import React from "react";
import NewTodo from "../models/todo";
import TodoListItem from "./TodoListItem1";

interface TodoProps {
  items: NewTodo[];
  deletes:Function
}
const Todo = ({ items, deletes }: TodoProps) => {
  return (
    <ul>
      {items.map((list) => (
     
          <TodoListItem key={list.task} listItem={list} deletes={deletes} />
     
      ))}
    </ul>
  );
};

export default Todo;
