import { combineReducers, createStore } from 'redux'

const initialCounterState = {
    counter: 0
}

const initialToDoState = {
    todos: []
}

function counterReducer(state = initialCounterState, action) {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 }
        case 'decrement':
            return { counter: state.counter - 1 }
        default:
            return state;
    }
}

function todoReducer(state = initialToDoState, action) {
    console.log('action', action);

    switch (action.type) {
        case 'add_todo':
            return {
                todos: [...state.todos, action.payload],
            }
        case 'delete_todo':
            return {}
        default:
            return state;
    }
}

const rootReduser = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
})
const store = createStore(rootReduser);

export default store;