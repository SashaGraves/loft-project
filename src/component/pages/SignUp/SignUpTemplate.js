import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, TextField, Link, Grid, Button } from '@material-ui/core';
import Background from 'login-background.jpg';
import logo from 'logo-taxi-white.svg';


const SignUpTemplate = ({ goToLogin, submitHandler }) => {

    const styles = {
        
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
                        Регистрация
                    </Typography>
                    <Typography align='left' style={styles.typography}>
                        Уже зарегистрированы?
                        <Link href="#" onClick={goToLogin} variant="body1" style={styles.link}>
                            Войти
                        </Link>
                    </Typography>
                    
                    <form>
                    <TextField
                        id="email"
                        name="email"
                        label="Адрес электронной почты"
                        defaultValue=""
                        fullWidth
                        style={styles.textField}
                    />
                        
                    <TextField
                        id="name"
                        name="name"
                        label="Имя"
                        defaultValue=""
                    />
                    
                    <TextField
                        id="surname"
                        name="surname"
                        label="Фамилия"
                        defaultValue=""
                        style={styles.textField}

                    />
                    
                    <TextField
                        id="password"
                        name="password"
                        label="Пароль"
                        defaultValue=""
                        fullWidth
                        style={styles.textField}

                    />
                        <Button variant="contained" style={styles.button} onClick={submitHandler}>Войти</Button>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );
}


SignUpTemplate.propTypes = {
    submitHandler: PropTypes.func,
    goToLogin: PropTypes.func,
};

export default SignUpTemplate;