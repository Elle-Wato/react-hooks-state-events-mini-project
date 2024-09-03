
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(deletedTask) {
    const newTaskList = tasks.filter((task) => task.text !== deletedTask);
    setTasks(newTaskList);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const displayTaskList = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={displayTaskList} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
