import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo, editTodo, clearTodos } from "../redux/actions";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo("");
    }
  };

  const handleEditTodo = (id) => {
    if (editText.trim()) {
      dispatch(editTodo(id, { text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <h3 className="text-center mt-3">TODO List</h3>
      <div className="input-group mb-3">
        <input className="form-control" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          <li className="list-group-item d-flex align-items-center" key={todo.id}>
            {editId === todo.id ? (
              <div>
                <input className="me-3" type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button className="me-3" onClick={() => handleEditTodo(todo.id)}>Save</button>
              </div>
            ) : (
              <span className="w-100" onClick={() => handleToggleTodo(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
              </span>
            )}
            <button className="me-3" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button
              onClick={() => {
                setEditId(todo.id);
                setEditText(todo.text);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearTodos}>Clear All</button>
    </div>
  );
};

export default TodoApp;