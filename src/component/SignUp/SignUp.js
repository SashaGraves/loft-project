import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextField } from '@material-ui/core'; 

class SignUp extends React.Component {
    render() {
        return (
            <div>
                Уже зарегистрированы? <a href="#" onClick={() => {this.props.onSubmit("LOGIN")}}>Войти</a>
                <form onSubmit={(e) => {e.preventDefault(); this.props.onSubmit("MAP")}}>
                    <label> Адрес электронной почты
                        <input name="email" type="email" />
                    </label>
                    <label> Имя
                        <input name="name" type="text" />
                    </label>
                    <label> Фамилия
                        <input name="surname" type="text" />
                    </label>
                    <label> Пароль
                        <input name="password" type="password" />
                    </label>
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    onSubmit: PropTypes.func
};

export default SignUp;