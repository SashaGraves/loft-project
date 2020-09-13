import React from 'react';
import PropTypes from 'prop-types';


class Login extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.changePage("MAP");
    }
    
    render() {
        return (
            <div>
                Новый пользователь?
                <a href="#" onClick={() => {this.props.changePage("SIGNUP")}}>
                    Зарегистрируйтесь
                </a>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Имя пользователя
                        <input name="name" type="text" />
                    </label>
                    <label>
                        Пароль
                        <input name="password" type="password"/>
                    </label>
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    changePage: PropTypes.func
};

export default Login;