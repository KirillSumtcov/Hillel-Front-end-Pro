import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_TODOS } from './actions';

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, ...action.payload.updatedTodo } : todo
                ),
            };
        case CLEAR_TODOS:
            return { ...state, todos: [] };
        default:
            return state;
    }
};

export default todoReducer;