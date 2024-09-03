import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const displayTask = tasks.map((task) => (
    <Task
      key={`${task.text}-${task.category}`}  // Combine text and category to form a unique key
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));

  return <div className="tasks">{displayTask}</div>;
}

export default TaskList;
