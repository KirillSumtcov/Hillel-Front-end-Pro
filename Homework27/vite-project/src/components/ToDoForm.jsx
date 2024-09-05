import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToDoForm({ addToDo }) {
  const [input, setInput] = useState("");

  const { theme } = useContext(ThemeContext);
  const textColorClass = theme === "dark" ? "bg-dark text-white border-white" : "bg-white text-dark border-dark";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addToDo(input);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className={`mb-3 ${textColorClass}`}>
      <div className={`input-group ${textColorClass}`}>
        <input type="text" className={`form-control ${textColorClass}`} placeholder="Введіть нове завдання..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn btn-primary" type="submit">
          Додати
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;
