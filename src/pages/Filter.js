import { useDispatch } from 'react-redux';
import { todoActions } from '../store/todoSlice';
import classes from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const addToFilters = (e) => {
        dispatch(todoActions.addSelectedFilter(e.target.id));
    };

    return (
        <div className={classes.filter__div}>
            <span>Filtrele:</span>
            <div className={classes.filter__detail}>
                <button onClick={addToFilters} id="done">Tamamlananlar</button>
                <button onClick={addToFilters} id="notdone">Tamamlanmayanlar</button>
            </div>

        </div>
    )
}

export default Filter;