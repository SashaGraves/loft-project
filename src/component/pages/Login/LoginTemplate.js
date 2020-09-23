import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, TextField, Link, Grid, Button } from '@material-ui/core';
import Background from 'login-background.jpg';
import logo from 'logo-taxi-white.svg';


const LoginTemplate = ({ goToSignUp, submitHandler, username, password, changeInput, usernameError, passwordError }) => {

    const styles = {
        '@keyframes taxi': {
            from: {
                filter: 'blur(40px)',
                opacity: 0,
                transform: 'translateX(-1000px) scaleX(2.5) scaleY(0.2)',
                transformOrigin: '100% 50%',
            },
            to: {
                filter: 'blur(0)',
                opacity: 1,
                transform: 'translateX(0) scaleY(1) scaleX(1)',
                transformOrigin: '50% 50%',
            }
        },
        container: {
            padding: '40px 60px 80px',
            backgroundColor: 'white',
        },
        link: {
            marginLeft: 5,
        },
        typography: {
            marginBottom: 20,
        },
        gridContainer: {
            backgroundImage: `url(${Background})`,
            height: 700,
        },
        logoImage: {
            width: 156,
            marginTop: 150,
            animation: '$taxi 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both 0.3s',
        },
        button: {
            backgroundColor: '#ffc617',
            textTransform: 'capitalize',
            float: 'right',
            marginTop: 15,
        },
        textField: {
            marginBottom: 15,
        }
    }

    return (
        <Grid container style={styles.gridContainer}>
            <Grid item xs={12} />
            <Grid item xs={4} />
            <Grid item xs={2}>
                <img src={logo} style={styles.logoImage} alt="logo Loft-taxi" />
            </Grid>
            <Grid item xs={4}>
                <Paper maxWidth="sm" style={styles.container}>
                    <Typography variant='h4' align='left' color='textPrimary' gutterBottom>
                        Войти
                    </Typography>
                    <Typography align='left' style={styles.typography}>
                        Новый пользователь?
                        <Link href="#" onClick={goToSignUp} variant="body1" style={styles.link}>
                            Зарегистрируйтесь
                        </Link>
                    </Typography>
                    
                    <form>
                    <TextField
                        id="username"
                        name="username"
                        label="Имя пользователя"
                        defaultValue=""
                        helperText={(usernameError === 'error') ? "Неверный логин" : ""}
                        fullWidth
                        value={username}
                        onChange={(event) => changeInput('username', event.target.value)}
                        style={styles.textField}
                    />
                    
                    <TextField
                        id="password"
                        name="password"
                        label="Пароль"
                        defaultValue=""
                        fullWidth
                        value={password}
                        onChange={(event) => changeInput('password', event.target.value)}
                    />
                        <Button variant="contained" style={styles.button} onClick={submitHandler}>Войти</Button>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );
}


LoginTemplate.propTypes = {
    submitHandler: PropTypes.func,
    goToSignUp: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string,
    usernameError: PropTypes.string,
    passwordError: PropTypes.string,
    changeInput: PropTypes.func,
};

export default LoginTemplate;