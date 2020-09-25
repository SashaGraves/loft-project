import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../AuthContext';
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
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
        }
        this.changeInput = this.changeInput.bind(this);
        this.goToSignUp = this.goToSignUp.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    
    changeInput = (key, value) => {
        this.setState({[key]: value});
        if (this.state[key]) {
            this.setState({[key + 'Error']: 'success'});
        } else {
            this.setState({[key + 'Error']: 'error'});
        }
            
    }
    
    goToSignUp = () => {
        this.context.changePage("SIGNUP");
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        this.context.login('test', '12345');
        this.context.changePage("MAP");
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
                        
                        <form onSubmit={this.submitHandler}>
                        <TextField
                            id="username"
                            name="username"
                            label="Имя пользователя"
                            helperText={(this.usernameError === 'error') ? "Неверный логин" : ""}
                            fullWidth
                            value={this.username}
                            onChange={(event) => this.changeInput('username', event.target.value)}
                            style={styles.textField}
                        />
                        
                        <TextField
                            id="password"
                            name="password"
                            label="Пароль"
                            fullWidth
                            value={this.password}
                            onChange={(event) => this.changeInput('password', event.target.value)}
                        />
                            <Button variant="contained" style={styles.button} type="submit">Войти</Button>
                        </form>
                    </Paper>
                </Grid>
            <Grid item xs={2} />
        </Grid>
        );
    }
}

Login.propTypes = {
    contextValue: PropTypes.object,
};

Login.contextType = AuthContext;

export default Login;
