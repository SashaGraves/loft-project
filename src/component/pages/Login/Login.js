import React from 'react';
import {connect} from 'react-redux';
import {postLoginInfo} from 'store.js';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Paper, Typography, TextField, Grid, Button } from '@material-ui/core';
import Background from 'login-background.jpg';
import logo from 'logo-taxi-white.svg';

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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            passwordInput: '',
            emailInputError: '',
            passwordInputError: '',
            errorMessage: false,
        }
        this.changeInput = this.changeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    changeInput = (key, value) => {
        this.setState({errorMessage: false});
        this.setState({[key]: value});
        if (value) {
            this.setState({[key + 'Error']: 'success'});
        } else {
            this.setState({[key + 'Error']: 'error'});
        }
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.emailInputError === 'success' && this.state.passwordInputError === 'success') {
            this.props.postLoginInfo({email: this.state.emailInput, password: this.state.passwordInput});
        } else {
            this.setState({errorMessage: true});
        }
    }

    render() {

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
                            Войти
                        </Typography>
                        <Typography align='left' style={styles.typography}>
                            Новый пользователь?
                            <Link to="/signup" style={styles.link}>
                                Зарегистрируйтесь
                            </Link>
                        </Typography>
                        
                        <form onSubmit={this.onSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email пользователя"
                            helperText={(this.state.emailInputError === 'error') && 'Введите email'}
                            fullWidth
                            value={this.state.emailInput}
                            onChange={(event) => this.changeInput('emailInput', event.target.value)}
                            style={styles.textField}
                        />
                        
                        <TextField
                            id="password"
                            name="password"
                            label="Пароль"
                            fullWidth
                            value={this.state.passwordInput}
                            onChange={(event) => this.changeInput('passwordInput', event.target.value)}
                            type="password"
                        />
                    
                            <Button variant="contained" type="submit" style={styles.button} disabled={this.props.isLoading}>Войти</Button>                        
                    
                        </form>
                        {this.props.credentialError && 
                        <Typography color="error" variant="subtitle1">{this.props.credentialMessage}</Typography>}

                        {this.state.errorMessage 
                        && 
                        <Typography color="error" variant="body1">Заполните все поля</Typography>}
                    </Paper>
                </Grid>
            <Grid item xs={2} />
        </Grid>
        );
    }
}

Login.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    postLoginInfo: PropTypes.func.isRequired,
    credentialError: PropTypes.bool,
    credentialMessage: PropTypes.string,
};

const mapStateToProps = store => ({
    isLoading: store.isLoading,
    credentialError: store.credential.credentialError,
    credentialMessage: store.credential.credentialMessage,
});


export default connect(mapStateToProps, {postLoginInfo})(Login);
