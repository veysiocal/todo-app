import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../components/todo/AddTodo";
import TodoItem from "../components/todo/TodoItem";
import { todoActions } from "../store/todoSlice";
import Filter from "./Filter";

import classes from './Todos.module.css';

const Todos = () => {
    const [todo, setTodo] = useState({});
    // const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

    const todos = useSelector(state => state.todo.todos);
    
    console.log("todos: " ,todos)
    const dispatch = useDispatch();

    const todoHandler = e => {
        setTodo({
            name: e.target.value,
            isDone: false,
        })
    }

    const deleteTodoHandler = index => {
        dispatch(todoActions.deleteTodo(index))
    }


    const addTodoHandler = e => {
        e.preventDefault();
        dispatch(todoActions.setTodos(todo))
        setTodo('')
    }

    const selectedFilters = useSelector(state => state.todo.selectedFilters);
    let showTodos = [];
    // if(selectedFilters.length !== 0) {
    //     showTodos = todos.includes(selectedFilters.)
    // }

    return (
        <>
        <AddTodo todoHandler={todoHandler} addTodoHandler={addTodoHandler} todo={todo}/>
        <Filter />
        <ul className={classes.ul} >
        {todos.map((todo, index) => <TodoItem todo={todo} index={index} deleteTodoHandler={deleteTodoHandler}  /> )}
        </ul>
        </>
    )
}

export default Todos;