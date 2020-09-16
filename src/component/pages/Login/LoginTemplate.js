import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import { AuthContext } from '../../../App';

class LoginTemplate extends React.Component {

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
                <form onSubmit={this.props.onSubmit}>
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
    changePage: PropTypes.func, 
    onSubmit: PropTypes.func,
};

Login.contextType = AuthContext;

export default LoginTemplate;