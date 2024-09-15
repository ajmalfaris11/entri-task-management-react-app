import {useState } from "react";

function TaskManager(){
    const [tasks, setTask] = useState([]);
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <h1> Task Manager </h1>
            <ul>
                {tasks.map(
                    (task) => <li>{task}</li>
                )}
            </ul>
            <div>
                <input type="text" onChange={(even) => setInputValue (even.target.value)}/>
                <button>Add</button>
            </div>
        </>
    )  
  }

  export default TaskManager;