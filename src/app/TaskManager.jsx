import { useState } from "react";

function TaskManager() {
  // store the tasks and display
  const [tasks, setTask] = useState([]);
  // take value from input
  const [inputValue, setInputValue] = useState("");

  // store data when click the Add button
  function addTask() {
    // validating the input
    inputValue.length == 0
      ? setTask([...tasks])
      : setTask([...tasks, inputValue]);
    // set the value to empty after add the task
    setInputValue("");
  }

  // delete the task
  function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1);
    setTask([...tasks]);
  }

  return (
    <>
      <h1> Task Manager </h1>
      <ul>
        {tasks.map((task, index) => (
          <li>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          value={inputValue}
          type="text"
          onChange={(even) => setInputValue(even.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
    </>
  );
}

export default TaskManager;
