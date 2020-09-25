import React from 'react';
import {Link} from 'react-router-dom';
import { Paper, Typography, TextField, Grid, Button } from '@material-ui/core';
import Background from 'login-background.jpg';
import logo from 'logo-taxi-white.svg';

const SignUp = ({}) => {

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
        },
        button: {
            backgroundColor: '#ffc617',
            textTransform: 'capitalize',
            float: 'right',
            marginTop: 15,
        },
        textField: {
            marginBottom: 15,
        },
        span: {
            marginRight: 10,
        }
    }

    
    const onSubmit = (e) => {
        e.preventDefault();
        contextValue.login('test', '12345');
        contextValue.changePage("MAP");
    }
    
    const goToLogin = () => {
        contextValue.changePage("LOGIN");
    }

    return (
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
                    
                    <form onSubmit={onSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Адрес электронной почты"
                            fullWidth
                            style={styles.textField}
                        />
                            
                        <TextField
                            id="name"
                            name="name"
                            label="Имя"
                        />

                        <span style={styles.span}/>
                        
                        <TextField
                            id="surname"
                            name="surname"
                            label="Фамилия"
                            style={styles.textField}
                        />
                        
                        <TextField
                            id="password"
                            name="password"
                            label="Пароль"
                            fullWidth
                            style={styles.textField}
                        />
                        <Button variant="contained" style={styles.button} type="submit">Войти</Button>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );

}


export default SignUp;