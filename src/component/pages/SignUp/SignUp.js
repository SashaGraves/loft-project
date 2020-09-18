import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextField } from '@material-ui/core'; 
import { AuthContext } from '../../../AuthContext';

const SignUp = ({changePage}) => {
    const contextValue = React.useContext(AuthContext)

    const onSubmit = (e) => {
        e.preventDefault();
        contextValue.login('test', '12345');
        changePage("MAP");
    }

    return (
        <div>
            Уже зарегистрированы?
            <a href="#" onClick={() => {changePage("LOGIN")}}>
                Войти
            </a>
            <form onSubmit={onSubmit}>
                <label>
                    Адрес электронной почты
                    <input name="email" type="email" />
                </label>
                <label>
                    Имя
                    <input name="name" type="text" />
                </label>
                <label>
                    Фамилия
                    <input name="surname" type="text" />
                </label>
                <label>
                    Пароль
                    <input name="password" type="password" />
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );

}


SignUp.propTypes = {
    changePage: PropTypes.func
};

export default SignUp;