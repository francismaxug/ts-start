import { createContext, useContext, useState } from "react";
import NewTodo from "../models/todo";

type Top = {
  todoo: NewTodo[];
  takeFxn: (todo: string) => void;
  deletes: (id: string) => void;
};
export const TodosContext = createContext<Top>({
  todoo: [],
  takeFxn: (todo: string) => {},
  deletes: (id: string) => {},
});
type Send = NewTodo[];

function TodoContext({children}:{children:React.ReactNode}) {
  const [todoo, setTodo] = useState<Send>([]);
  // const items1 = [new NewTodo("Learn React"), new NewTodo("Lorem NodeJs")];

  const takeFxn = (todo: string) => {
    const addNewTodo: any = [...todoo, new NewTodo(todo)];
    setTodo(addNewTodo);
  };

  const deletes = (id: string) => {
    const filterOut = todoo.filter((x) => x.id !== id);
    setTodo(filterOut);
  };

  const contextValue: Top = {
    todoo,
    takeFxn,
    deletes,
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
}

export default TodoContext;
export function useContextHook() {
  const context = useContext(TodosContext);
  if (context === undefined)
    throw new Error("You called the context at the wrong place");
  return context;
}
