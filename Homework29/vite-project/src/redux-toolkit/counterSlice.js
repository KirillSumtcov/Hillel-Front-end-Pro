import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increase: (state) => {
            state.counter = state.counter + 1
        },
        decrease: (state) => {
            state.counter = state.counter - 1
        }
    }
})

const { actions, reducer } = counterSlice

export const { increase, decrease } = actions
export default reducer;