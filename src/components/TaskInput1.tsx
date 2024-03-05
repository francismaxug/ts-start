import React, { useRef } from "react";

function TaskInput({ takeFxn }: { takeFxn: Function }) {

  const taskRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = taskRef.current?.value;
    if (enteredValue?.trim().length === 0) return;
    takeFxn(enteredValue);
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
