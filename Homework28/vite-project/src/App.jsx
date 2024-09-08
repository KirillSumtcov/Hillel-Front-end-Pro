import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import MyFormik from "./components/MyFormik";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
      <MyFormik addTask={addTask} />
      <ToDoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
