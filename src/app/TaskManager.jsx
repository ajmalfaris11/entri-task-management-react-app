import {useState } from "react";

function TaskManager(){
    // store the tasks and display
    const [tasks, setTask] = useState([]);
    // take value from input
    const [inputValue, setInputValue] = useState("");

    // store data when click the Add button
    function addData(){
        // validating the input
        inputValue.length==0?setTask([...tasks]):setTask([...tasks, inputValue]);
        // set the value to empty after add the task
        setInputValue("")
    }
    return (
        <>
            <h1> Task Manager </h1>
            <ul>
                {tasks.map(
                    (task) => <li>{task}</li>
                )}
            </ul>
            <div>
                <input value={inputValue} type="text" onChange={(even) => setInputValue (even.target.value)}/>
                <button onClick={addData}>Add</button>
            </div>
        </>
    )  
  }

  export default TaskManager;