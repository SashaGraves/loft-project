import React from 'react';
import {Link} from 'react-router-dom';
import { Paper, Typography, Grid } from '@material-ui/core';
import Background from 'login-background.jpg';
import logo from 'logo-taxi-white.svg';
import SignUpForm from './SignUp-form';

const styles = {
        
        container: {
            padding: '40px 60px 80px',
            backgroundColor: 'white',
            maxWidth: 420,
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
        },
    }

const SignUp = () => (
        <Grid container style={styles.gridContainer}>
        <Grid item xs={12} />
        <Grid item xs={4} />
        <Grid item xs={2}>
            <img src={logo} style={styles.logoImage} alt="logo Loft-taxi" />
        </Grid>
        <Grid item xs={4}>
            <Paper style={styles.container}>
                <Typography variant='h4' align='left' color='textPrimary' gutterBottom>
                    Регистрация
                </Typography>
                <Typography align='left' style={styles.typography}>
                    Уже зарегистрированы?
                    <Link to="/login" style={styles.link}>
                        Войти
                    </Link>
                </Typography>
                
                <SignUpForm />

            </Paper>
        </Grid>
        <Grid item xs={2} />
    </Grid>
);

export default SignUp;
