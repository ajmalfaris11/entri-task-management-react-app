import {useState } from "react";

function TaskManager(){
    const [tasks, setTask] = useState([]);
    return (
        <>
            <h1> Task Manager </h1>
            <ul>
                {tasks.map(
                    (task) => <li>{task}</li>
                )}
            </ul>
            <div>
                <input type="text" />
                <button>Add</button>
            </div>
        </>
    )  
  }

  export default TaskManager;