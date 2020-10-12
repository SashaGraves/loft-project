import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import {postRegisterInfo} from 'store.js';
import {connect} from 'react-redux';

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

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.surname) {
            errors.surname = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    return (
        <Form 
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <Field
                        name="email"
                        render={({input, meta}) => (
                            <TextField
                                id="email"
                                label="Адрес электронной почты *"
                                fullWidth
                                style={styles.textField}
                                value={input.emailInput}
                                onChange={input.onChange}
                                helperText={meta.touched && meta.error && 'Введите email'}
                                {...input}
                                error={meta.touched && Boolean(meta.error)}
                            />
                        )}
                    />

                    <Field
                        name="name"
                        render={({input, meta}) => (
                            <TextField
                            id="name"
                            label="Имя *"
                            value={input.nameInput}
                            onChange={input.onChange}
                            helperText={meta.touched && meta.error && 'Введите имя'}
                            {...input}
                            error={meta.touched && Boolean(meta.error)}
                        />
                        )}
                    />

                    <span style={styles.span}/>

                    <Field
                        name="surname"
                        render={({input, meta}) => (
                            <TextField
                            id="surname"
                            label="Фамилия *"
                            style={styles.textField}
                            value={input.surnameInput}
                            onChange={input.onChange}
                            helperText={meta.touched && meta.error && 'Введите фамилию'}
                            {...input}
                            error={meta.touched && Boolean(meta.error)}
                        />
                        )}
                    />

                    <Field
                        name="password"
                        render={({input, meta}) => (
                            <TextField
                            id="password"
                            label="Пароль *"
                            fullWidth
                            style={styles.textField}
                            value={input.passwordInput}
                            onChange={input.onChange}
                            helperText={meta.touched && meta.error && 'Введите пароль'}
                            {...input}
                            error={meta.touched && Boolean(meta.error)}
                        />
                        )}
                    />

                    {submitError &&
                        <Typography color="error" variant="subtitle1">{submitError}</Typography>
                    }

                    <Button variant="contained" type="submit" style={styles.button} disabled={props.isLoading}>Войти</Button>
                   
                    {props.credentialError && 
                    <Typography color="error" variant="subtitle1">{props.credentialMessage}</Typography>}
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

