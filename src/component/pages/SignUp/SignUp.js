import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postRegisterInfo} from 'store.js';
import {Link} from 'react-router-dom';
import { Paper, Typography, TextField, Grid, Button } from '@material-ui/core';
import Background from 'login-background.jpg';
import logo from 'logo-taxi-white.svg';

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
        }, 
        form: {
            width: 402,
            margin: '0 auto'
        },
    }

const SignUp = ({isLoading, postRegisterInfo, credentialError, credentialMessage}) => {
    
    const [emailInput, setEmailInput] = React.useState('');
    const [emailInputError, setEmailInputError] = React.useState('');
    const [nameInput, setNameInput] = React.useState('');
    const [nameInputError, setNameInputError] = React.useState('');
    const [surnameInput, setSurnameInput] = React.useState('');
    const [surnameInputError, setSurnameInputError] = React.useState('');
    const [passwordInput, setPasswordInput] = React.useState('');
    const [passwordInputError, setPasswordInputError] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState(false);
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (nameInputError === 'success' && 
            surnameInputError === 'success' &&
            passwordInputError === 'success' &&
            emailInputError === 'success') {
                postRegisterInfo({
                    email: emailInput,
                    password: passwordInput,
                    name: nameInput,
                    surname: surnameInput,
                });
        } else {
            setErrorMessage(true);
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
                    
                    <form onSubmit={submitHandler} style={styles.form}>
                        <TextField
                            id="email"
                            name="email"
                            label="Адрес электронной почты *"
                            fullWidth
                            style={styles.textField}
                            value={emailInput}
                            onChange={(event) => {
                                setErrorMessage(false);
                                setEmailInput(event.target.value);
                                if (event.target.value) {
                                    setEmailInputError('success');
                                } else {
                                    setEmailInputError('error');
                                }
                            }}
                            helperText={(emailInputError === 'error') && 'Введите email'}

                        />
                            
                        <TextField
                            id="name"
                            name="name"
                            label="Имя *"
                            value={nameInput}
                            onChange={(event) => {
                                setErrorMessage(false);
                                setNameInput(event.target.value);
                                if (event.target.value) {
                                    setNameInputError('success');
                                } else {
                                    setNameInputError('error');
                                }
                            }}
                            helperText={(nameInputError === 'error') && 'Введите имя'}

                        />

                        <span style={styles.span}/>
                        
                        <TextField
                            id="surname"
                            name="surname"
                            label="Фамилия *"
                            style={styles.textField}
                            value={surnameInput}
                            onChange={(event) => {
                                setErrorMessage(false);
                                setSurnameInput(event.target.value);
                                if (event.target.value) {
                                    setSurnameInputError('success');
                                } else {
                                    setSurnameInputError('error');
                                }
                            }}
                            helperText={(surnameInputError === 'error') && 'Введите фамилию'}
                        />
                        
                        <TextField
                            id="password"
                            name="password"
                            label="Пароль *"
                            fullWidth
                            style={styles.textField}
                            value={passwordInput}
                            onChange={(event) => {
                                setErrorMessage(false);
                                setPasswordInput(event.target.value);
                                if (event.target.value) {
                                    setPasswordInputError('success');  
                                } else {
                                    setPasswordInputError('error');
                                }
                            }}
                            helperText={(passwordInputError === 'error') && 'Введите пароль'}
                        />
                        {errorMessage 
                        && 
                        <Typography color="error" variant="body1">Заполните все поля</Typography>}
                        { isLoading ?
                            <Button variant="contained" type="button" style={styles.button} disabled>Войти</Button>
                        :
                            <Button variant="contained" style={styles.button} type="submit">Войти</Button>}
                    </form>
                    {credentialError && 
                    <Typography color="error" variant="subtitle1">{credentialMessage}</Typography>}
                </Paper>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );

}

const mapStateToProps = store => ({
    isLoading: store.isLoading,
    credentialError: store.credential.credentialError,
    credentialMessage: store.credential.credentialMessage,
});

SignUp.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    postRegisterInfo: PropTypes.func.isRequired,
    credentialError: PropTypes.bool,
    credentialMessage: PropTypes.string,
};

export default connect(mapStateToProps, {postRegisterInfo})(SignUp);