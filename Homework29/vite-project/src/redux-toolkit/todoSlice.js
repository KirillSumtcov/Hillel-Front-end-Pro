import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addToDo: (state, action) => {
            const newTodoItem = {
                id: Date.now(),
                text: action.payload
            }
            state.todos.push(newTodoItem)
        },
    }
})

const { actions, reducer } = todoSlice

export const { addToDo } = actions
export default reducer;