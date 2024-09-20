import { useState } from "react";
import "./style.css"

function TaskManager() {
  // store the tasks and display

  const [tasks, setTasks] = useState([]); // take value from input
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    // store data when click the Add button
    // validating the input
    if (inputValue.length === 0) {
      return;
    }

    setTasks([
      ...tasks,
      {
        content: inputValue,
        isComplete: false,
        isEditing: false,
      },
    ]);

    setInputValue(""); // set the value to empty after add the task
  }

  // delete the task
  function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  }

  function markCompleted(taskIndex) {
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete; //set false and true
    setTasks([...tasks]);
  }

  function editTask(taskIndex){
    tasks[taskIndex].isEditing = true;
    setTasks(
      [...tasks]
    )
  }

  function updateValue(taskIndex, value){
    tasks[taskIndex].content = value;
    setTasks(
      [...tasks]
    )
  }

  function saveTask(taskIndex){
    tasks[taskIndex].isEditing = false;

    setTasks(
      [...tasks]
    )
  }

  return (
    <div className="TaskManager">
      <h1> Task Manager </h1>

      <ul>
        {
          tasks.sort((a)=>a.isComplete ? 1 : -1).map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => markCompleted(index)}
            />

            {
              task.isEditing ?
              <span>
                <input type="text" value={task.content} onChange={(event)=> updateValue(index, event.target.value )} />
                <button onClick={()=> saveTask(index) }>save</button>
              </span> :

              <span>{task.isComplete ? (
                <del>{task.content}</del>
              ) : (
                <span>{task.content}</span>
              )}</span>
            }

            

            <button onClick={() => editTask(index)}>Edit</button>
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
    </div>
  );
}

export default TaskManager;
