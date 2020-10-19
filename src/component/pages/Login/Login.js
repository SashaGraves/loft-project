import React from 'react';
import {Link} from 'react-router-dom';
import { Paper, Typography, Grid } from '@material-ui/core';
import Background from 'login-background.jpg';
import logo from 'logo-taxi-white.svg';
import LoginForm from './Login-form';

const styles = {
    container: {
        padding: '40px 60px 80px',
        backgroundColor: 'white',
        maxWidth: 402,
    },
    link: {
        marginLeft: 5,
    },
    typography: {
        marginBottom: 20,
    },
    gridContainer: {
        backgroundImage: `url(${Background})`,
        height: '100vh',
    },
    logoImage: {
        width: 156,
        marginTop: 150,
        animation: '$taxi 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both 0.3s',
    },
}

const Login = () => (
    <Grid container style={styles.gridContainer}>
        <Grid item xs={12} />
        <Grid item xs={4} />
        <Grid item xs={2}>
            <img src={logo} style={styles.logoImage} alt="logo Loft-taxi" />
        </Grid>
        <Grid item xs={4}>
            <Paper style={styles.container}>
                <Typography variant='h4' align='left' color='textPrimary' gutterBottom>
                    Войти
                </Typography>
                <Typography align='left' style={styles.typography}>
                    Новый пользователь?
                    <Link to="/signup" style={styles.link}>
                        Зарегистрируйтесь
                    </Link>
                </Typography>

                <LoginForm />
                
            </Paper>
        </Grid>
        <Grid item xs={2} />
    </Grid>
);

export default Login;

