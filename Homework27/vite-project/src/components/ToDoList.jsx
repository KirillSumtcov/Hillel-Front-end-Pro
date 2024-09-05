import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToDoList({ todos, toggleTodo, deleteTodo }) {
    const { theme } = useContext(ThemeContext);
    const textColorClass = theme === "dark" ? "bg-dark text-white border-white" : "bg-white text-dark border-dark";
  return (
    <ul className={`list-group ${textColorClass}`}>
      {todos.map((todo, index) => (
        <li key={index} className={`list-group-item d-flex ${textColorClass} justify-content-between align-items-center ${todo.completed ? "list-group-item-success" : ""}`}>
          <span onClick={() => toggleTodo(index)} style={{ cursor: "pointer" }}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
