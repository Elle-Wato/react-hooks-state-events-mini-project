
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: categories[1] || "",
  });

  function handleChange(e) {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({
      text: "",
      category: categories[1] || "",
    });
  }

  const categoryOptions = categories
    .filter((category) => category !== "All")
    .map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={newTask.category}
          onChange={handleChange}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
