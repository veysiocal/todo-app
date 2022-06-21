import classes from './AddTodo.module.css'
const AddTodo = ({ todo, todoHandler, addTodoHandler }) => {

    return (
        <>
            <form onSubmit={addTodoHandler} className={classes.form}>
                <input placeholder='Todo ekle' onChange={todoHandler} value={todo.name}></input>
                <button type="submit">Ekle</button>
            </form>
        </>
    )
}

export default AddTodo;