import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navCustom}>
                <ul>
                    <li>
                        <NavLink to='/login'>Giriş Yap</NavLink>
                    </li>
                    <li>
                        <NavLink to='/todos'>Todolarım</NavLink>
                    </li>
                </ul>
            </nav>
            <h1>TODOAPP</h1>
        </header >
    );
}

export default Header;