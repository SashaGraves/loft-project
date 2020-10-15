import React from 'react';
import { Form, Field } from 'react-final-form'
import { Typography, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import {postLoginInfo} from 'store.js';
import {connect} from 'react-redux';
import { composeValidators, required, minValue, minLength, mustBeLetters, isEmail } from '../../validation';

const styles = {
    typography: {
        marginBottom: 20,
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

const LoginForm = (props) => {

    const onSubmit = (values) => {
        props.postLoginInfo({email: values.email, password: values.password})
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        validate={composeValidators(required, isEmail)}
                        name="email"
                        render={({ input, meta }) => (
                            <div>
                                <TextField 
                                    id="email"
                                    label="Email пользователя"
                                    style={styles.textField}
                                    fullWidth
                                    value={input.value}
                                    onChange={input.onChange}
                                    helperText={meta.error && meta.touched ? meta.error : ''}
                                    error={meta.active ? false : (meta.error && meta.touched)}
                                    {...input}
                                />
                            </div>
                        )}
                    />

                    <Field 
                        validate={composeValidators(required)}
                        name="password"
                        render={({input, meta}) => (
                            <div>
                                <TextField 
                                    id="password"
                                    label="Пароль"
                                    type="password"
                                    style={styles.textField}
                                    fullWidth
                                    value={input.value}
                                    onChange={input.onChange}
                                    helperText={meta.error && meta.touched ? meta.error : ''}
                                    error={meta.active ? false : (meta.error && meta.touched)}
                                    {...input}
                                />
                                
                            </div>
                        )}
                    />

                    <Button variant="contained" type="submit" style={styles.button} disabled={props.isLoading}>Войти</Button>                        
                
                    {props.credentialError && 
                    <Typography color="error" variant="subtitle1">{props.credentialMessage}</Typography>}
                </form>
            )}
        />
        
    )
}

LoginForm.propTypes = {
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


export default connect(mapStateToProps, {postLoginInfo})(LoginForm);