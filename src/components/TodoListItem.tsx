import React from "react";

type Project = {
  id: string;
  task: string;
};

interface ItemList {
  listItem: Project;
  deletes: () => void;
}
export default function TodoListItem({ listItem, deletes }: ItemList) {
  return <li onClick={deletes}>{listItem.task}</li>;
}
