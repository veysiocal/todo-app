import classes from './Auth.module.css';
const Auth = () => {
    return (
        <form className={classes.form}>
            <label>Email:</label> <br/>
            <input type='email' />
            <br />
            <label>Parola:</label> <br />
            <input type='password' />
        </form>
    )
}

export default Auth;