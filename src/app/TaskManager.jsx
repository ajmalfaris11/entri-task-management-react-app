import { useState } from "react";

function TaskManager() { // store the tasks and display

  const [tasks, setTasks] = useState([]); // take value from input
  const [inputValue, setInputValue] = useState("");

  
  function addTask() { // store data when click the Add button
    // validating the input
    inputValue.length == 0
      ? setTasks([...tasks])
      : setTasks([...tasks, {
        content : inputValue,
        isComplete: false,

    }]);
      
    setInputValue("");    // set the value to empty after add the task

  }

  // delete the task
  function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  }

  function markCompleted(taskIndex){
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete //set false and true
    setTasks([
        ...tasks
    ])
  }

  return (
    <>
      <h1> Task Manager </h1>

      <ul>
        {tasks.map((task, index) => (
          <li>
            
            <input type="checkbox" value={task.isComplete} onChange={()=>markCompleted}/>
            {task.content}
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
