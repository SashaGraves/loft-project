import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import {AuthContext} from '../../../AuthContext';

class LoginTemplate extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        console.log(props);
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
                {/* <form onSubmit={this.props.onSubmit}> */}
                <form>
                    <label>
                        Имя пользователя
                        <input name="name" type="text" />
                    </label>
                    <label>
                        Пароль
                        <input name="password" type="password"/>
                    </label>
                    <button type="button" onClick={() => this.props.login('a', 'b')}>Войти</button>
                </form>
            </Container>
        );
    }
}

LoginTemplate.propTypes = {
    onSubmit: PropTypes.func,
    login: PropTypes.func,
};

export default LoginTemplate;