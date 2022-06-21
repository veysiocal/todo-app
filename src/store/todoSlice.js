import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
        selectedFilters: '',
    },
    reducers: {
        setTodos(state, action) {
            state.todos = [
                ...state.todos,
                action.payload,
            ]
            localStorage.setItem('todos', JSON.stringify([...state.todos, action.payload]))
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((todo, index) => index !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos.filter((todo, index) => index !== action.payload)))

        },
        todoCompleted(state, action) {
            const todo = state.todos.find((todo, index) => index === action.payload);
            state.todos = [
                ...state.todos,
                {
                    ...todo,
                    isDone: true,
                }
            ]
        },
        addSelectedFilter(state, action) {
            //     if (!state.selectedFilters.includes(action.payload)) {
            //         state.selectedFilters.push(action.payload)
            //     }
            // 
            state.selectedFilters = action.payload

        }
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
