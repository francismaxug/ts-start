import React, { useRef } from "react";
import { useContextHook } from "../context/TodoContext";

function TaskInput() {

  const ctx = useContextHook()

  const taskRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = taskRef.current!.value;
    if (enteredValue?.trim().length === 0) return;
    ctx.takeFxn(enteredValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Input Task</label>
      <input type="text" id="task" ref={taskRef} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
