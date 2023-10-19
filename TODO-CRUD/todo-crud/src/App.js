import './App.css';
import React, {useState} from 'react';
import Tasky from './Task';

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleClick = () => {
      const Task = {
        id : tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        taskName : newTask,
      };
      setTasks([...tasks, Task]);
      const Input = document.getElementById('form');
      Input.value = '';
      console.log(tasks);
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewTask(event.target.value);
  }

  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => (task.id !== id)))
  }

  return (
    <div className="App" style={{height: "100vh", width: "100%", margin :"0", padding: "0" , display :"flex", flexDirection: "column", alignItems: "center"}}>
      <div className="add-task" style={{ display: "flex", justifyContent: "center" , alignItems: "center", backgroundColor: "#7091F5", height : "300px", width: "100%"}}>
        <input id='form' onChange={handleChange} onSubmit={handleChange} style={{borderRadius: "15px", marginRight: "5rem", padding: " 0.5rem 1rem 0.5rem 1rem"}}/>
        <button onClick={handleClick} style={{borderRadius: "15px", padding: " 0.5rem 1rem 0.5rem 1rem"}}>Add Task</button>
      </div>
      <div className="list" style={{display :"flex", flexDirection: "column", justifyContent: "center", alignItems : "center", paddingTop: "2rem"}}>
        {tasks.map((Task) => {
          return <Tasky taskName={Task.taskName} id={Task.id} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  );
}

export default App;
