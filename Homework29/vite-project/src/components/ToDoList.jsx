import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../redux-toolkit/todoSlice";

function ToDoList() {
  const todos = useSelector((state) => state.todo.todos);
  const totalTodos = useSelector((state) => state.todo.todos.length);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  function handleAddTodo() {
    if (!todoText.trim()) {
      setError("Введіть текст");
      return;
    }
    setError("");
    dispatch(addToDo(todoText));
    setTodoText("");
  }
  return (
    <div>
      <h3 className="text-center mt-3">To Do List</h3>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Введіть нове завдання..." value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button className="btn btn-primary" type="submit" onClick={handleAddTodo}>
          Додати
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
      <div className="alert text-start text-danger">Загальна кількість: {totalTodos}</div>
    </div>
  );
}
export default ToDoList;
