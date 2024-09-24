export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const loadTodos = () => ({ type: LOAD_TODOS });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const editTodo = (id, updatedTodo) => ({ type: EDIT_TODO, payload: { id, updatedTodo } });
export const clearTodos = () => ({ type: CLEAR_TODOS });