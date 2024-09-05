import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDOList";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className={theme === "dark" ? "bg-dark text-primary content-height" : "bg-white text-dark content-height"}>
      <Menu />
      <div className="container mt-4 pb-4">
        <h3>TODO Список</h3>
        <ToDoForm addToDo={addToDo} />
        <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
      {/* Остальные компоненты */}
    </div>
  );
}

export default App;
