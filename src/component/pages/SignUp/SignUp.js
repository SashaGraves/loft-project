import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextField } from '@material-ui/core'; 

class SignUp extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.changePage("MAP");
    }
    
    render() {
        return (
            <div>
                Уже зарегистрированы?
                <a href="#" onClick={() => {this.props.changePage("LOGIN")}}>
                    Войти
                </a>
                <form onSubmit={this.onSubmit}>
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
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    changePage: PropTypes.func
};

export default SignUp;