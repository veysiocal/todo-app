
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todoSlice';
import classes from './TodoItem.module.css'
const TodoItem = ({ index, todo, deleteTodoHandler }) => {
    const [todoIsDone, setTodoIsDone] = useState(false);

    const dispatch = useDispatch()

    const todoDoneHandler = (index) => {
        setTodoIsDone(todoIsDone => !todoIsDone);
        dispatch(todoActions.todoCompleted(index))
    }

    const lineClasses = todoIsDone ? 'done' : 'not';


    return (
        <li key={index}>
            <div className={`${classes.todoDiv} ${classes[lineClasses]}`}>
                {todo.name}
                <div>
                    <button >Düzenle</button>
                    <button className={classes.deleteBtn} onClick={() => deleteTodoHandler(index)}>Sil</button>
                    <button className={`${classes.doneBtn} ${classes[lineClasses]}`} onClick={() => todoDoneHandler(index)}>{!todoIsDone ? 'Tamamlandı' : 'Geri Al'}</button>
                </div>

            </div>
        </li>
    )
}

export default TodoItem;