import React from 'react';
import PropTypes from 'prop-types';


class Login extends React.Component {
    render() {
        return (
            <div>
                Новый пользователь? <a href="#" onClick={() => {this.props.onSubmit("SIGNUP")}}>Зарегистрируйтесь</a>
                <form onSubmit={(e) => {e.preventDefault(); this.props.onSubmit("MAP")}}>
                    <label> Имя пользователя
                        <input name="name" type="text" />
                    </label>
                    <label> Пароль
                        <input name="password" type="password"/>
                    </label>
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    onSubmit: PropTypes.func
};

export default Login;