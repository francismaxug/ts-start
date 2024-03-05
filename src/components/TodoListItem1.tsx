import React from "react";

type Project = {
  id: string;
  task: string;
};

interface ItemList {
  listItem: Project;
  deletes: Function;
}
export default function TodoListItem({ listItem, deletes }: ItemList) {
  const deleteTodo = (id: string) => {
    deletes(id);
  };
  return <li onClick={() => deleteTodo(listItem.id)}>{listItem.task}</li>;
}
