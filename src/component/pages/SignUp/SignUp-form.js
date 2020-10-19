import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { Typography, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import {postRegisterInfo} from 'store.js';
import {connect} from 'react-redux';
import { composeValidators, required, minLength, mustBeLetters, isEmail } from '../../validation';


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
    },
    span: {
        marginRight: 10,
    }, 
    form: {
        width: 402,
        margin: '0 auto'
    },
}

const SignUpForm = (props) => {

    const onSubmit = values => {
        if (!values.email || !values.name || !values.surname || !values.password) {
            return { [FORM_ERROR]: 'All fields required' }
        }
        props.postRegisterInfo({
            email: values.email,
            password: values.password,
            name: values.name,
            surname: values.surname,
        });
    }

    return (
        <Form 
            onSubmit={onSubmit}
            render={({handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <Field
                        name="email"
                        validate={composeValidators(required, isEmail)}
                        render={({input, meta}) => (
                            <TextField
                                id="email"
                                label="Адрес электронной почты *"
                                fullWidth
                                style={styles.textField}
                                value={input.emailInput}
                                onChange={input.onChange}
                                helperText={meta.error && meta.touched ? meta.error : ''}
                                error={meta.active ? false : (meta.error && meta.touched)}
                                {...input}
                            />
                        )}
                    />

                    <Field
                        validate={composeValidators(required, mustBeLetters)}
                        name="name"
                        render={({input, meta}) => (
                            <TextField
                            id="name"
                            label="Имя *"
                            value={input.nameInput}
                            onChange={input.onChange}
                            helperText={meta.error && meta.touched ? meta.error : ''}
                            error={meta.active ? false : (meta.error && meta.touched)}
                            {...input}
                        />
                        )}
                    />

                    <span style={styles.span}/>

                    <Field
                        validate={composeValidators(required, mustBeLetters)}
                        name="surname"
                        render={({input, meta}) => (
                            <TextField
                            id="surname"
                            label="Фамилия *"
                            style={styles.textField}
                            value={input.surnameInput}
                            onChange={input.onChange}
                            helperText={meta.error && meta.touched ? meta.error : ''}
                            error={meta.active ? false : (meta.error && meta.touched)}
                            {...input}
                        />
                        )}
                    />

                    <Field
                        name="password"
                        validate={composeValidators(required, minLength(6))}
                        render={({input, meta}) => (
                            <TextField
                            id="password"
                            type="password"
                            label="Пароль *"
                            fullWidth
                            style={styles.textField}
                            value={input.passwordInput}
                            onChange={input.onChange}
                            helperText={meta.error && meta.touched ? meta.error : ''}
                            error={meta.active ? false : (meta.error && meta.touched)}
                            {...input}
                        />
                        )}
                    />

                    {submitError &&
                        <Typography color="error" variant="subtitle1">{submitError}</Typography>
                    }

                    <Button variant="contained" type="submit" style={styles.button} disabled={props.isLoading}>Войти</Button>
                   
                </form>
            )}
        />
    )
};

const mapStateToProps = store => ({
    isLoading: store.isLoading,
    credentialError: store.credential.credentialError,
    credentialMessage: store.credential.credentialMessage,
});

SignUpForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    postRegisterInfo: PropTypes.func.isRequired,
    credentialError: PropTypes.bool,
    credentialMessage: PropTypes.string,
};

export default connect(mapStateToProps, {postRegisterInfo})(SignUpForm);

