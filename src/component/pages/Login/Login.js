import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import { AuthContext } from '../../../App';

class Login extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.changePage("MAP");
    }

    styles = {
        padding: 40,
        backgroundColor: 'gray'
    }


    render() {
        return (
            <Container maxWidth="sm" style={this.styles}>
                <Typography variant='h4' align='left' color='textPrimary' gutterBottom>
                    Войти
                </Typography>
                <Typography align='left'>
                    Новый пользователь?
                    <a href="#" onClick={() => {this.props.changePage("SIGNUP")}}>
                        Зарегистрируйтесь
                    </a>
                </Typography>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Имя пользователя
                        <input name="name" type="text" />
                    </label>
                    <label>
                        Пароль
                        <input name="password" type="password"/>
                    </label>
                    <button type="submit" onClick={this.context.login}>Войти</button>
                </form>
            </Container>
        );
    }
}

Login.propTypes = {
    changePage: PropTypes.func
};

Login.contextType = AuthContext;

export default Login;


// https://github.com/facebook/react/issues/13969 тред про это