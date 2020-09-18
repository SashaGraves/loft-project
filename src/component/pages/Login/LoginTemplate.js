import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, TextField } from '@material-ui/core';

const LoginTemplate = ({ goToMap, contextValue, goToSignUp }) => {

    const styles = {
        padding: 40,
    }

    const submitHandler = (e) => {
        e.preventDefault();
        contextValue.login('test', '12345');
        goToMap();
    }

    return (
        <Container maxWidth="sm" style={styles}>
            <Typography variant='h4' align='left' color='textPrimary' gutterBottom>
                Войти
            </Typography>
            <Typography align='left'>
                Новый пользователь?
                <a href="#" onClick={goToSignUp}>
                    Зарегистрируйтесь
                </a>
            </Typography>
            <form onSubmit={submitHandler}>

            <TextField
                required 
                id="username"
                label="Not empty"
                defaultValue="Hello World"
                helperText="Incorrect entry."
            />

                <label>
                    Имя пользователя
                    <input name="name" type="name" />
                </label>
                <label>
                    Пароль
                    <input name="password" type="password"/>
                </label>
                <button type="submit">Войти</button>
            </form>
        </Container>
    );
}


LoginTemplate.propTypes = {
    goToMap: PropTypes.func,
    contextValue: PropTypes.object,
    goToSignUp: PropTypes.func,
};

export default LoginTemplate;