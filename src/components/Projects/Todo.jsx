import React, { useState } from "react";
import './Todo.css';
import { FaTrash, FaCheck } from 'react-icons/fa';
import DateTime from "./DateTime";

const Todo = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTaskText = task.trim();

    // Prevent empty or duplicate tasks (case-insensitive)
    if (
      !newTaskText ||
      taskList.some((t) => t.text.toLowerCase() === newTaskText.toLowerCase())
    ) {
      setTask('');
      return;
    }

    const newTask = {
      text: newTaskText,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const handleDelete = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
  };

  const handleToggleComplete = (index) => {
    const updatedList = [...taskList];
    updatedList[index].completed = !updatedList[index].completed;
    setTaskList(updatedList);
  };

  const handleClearAll = () => {
      setTaskList([]);
  };

  return (
    <div className="Todo-container">
      <h2>Todo List</h2>
      <DateTime />

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {taskList.map((t, index) => (
          <div className="task-item" key={index}>
            <span
              className={t.completed ? 'completed' : ''}
              onClick={() => handleToggleComplete(index)}
            >
              {t.text}
            </span>
            <FaCheck
              className="icon check"
              onClick={() => handleToggleComplete(index)}
            />
            <FaTrash
              className="icon delete"
              onClick={() => handleDelete(index)}
            />
          </div>
        ))}
      </ul>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
};

export default Todo;
