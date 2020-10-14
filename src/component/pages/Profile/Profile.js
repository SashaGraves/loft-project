import React from 'react';
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Paper, Typography, TextField, Grid, Button, Container, Box } from '@material-ui/core';
import {KeyboardDatePicker} from '@material-ui/pickers';
import Background from 'login-background.jpg';
import {postCardInfo} from 'store.js';
import { composeValidators, required, mustBeNumber, length, mustBeLetters } from '../../validation';


const styles = {
    innerContainer: {
        width: 750,
        margin: '40px auto 0',
    },
    typography: {
        marginBottom: 20,
    },
    boxContainer: {
        backgroundImage: `url(${Background})`,
        height: '100vh',
    },
    button: {
        backgroundColor: '#ffc617',
        textTransform: 'capitalize',
        width: 120,
        margin: '15px auto',
    },
    textField: {
        margin: '25px 20px 0',
        width: 280,
    },
    paper: {
        padding: '35px 20px',
    }, 
    externalContainer: {
        width: 870,
        paddingTop: 100,
    },
    card: {
        height: 180,
        padding: '5px 5px 10px 10px'
    },
    datePicker: {
        margin: '25px 20px 0',
        width: 280,
    },
   
}

const Profile = ({isLoading, 
    postCardInfo, 
    previousCardNumber, 
    previousExpiryDate, 
    previousCardName, 
    previousCvc}) => {

    const onSubmit = (values) => {
        if (!values.card || !values.cvc || !values.expiryDate || !values.cardName) {
            return { [FORM_ERROR]: 'All fields required' }
        }
        postCardInfo({
            cardNumber: values.card, 
            expiryDate: values.expiryDate, 
            cardName: values.cardName, 
            cvc: values.cvc,
        });
    };

    const validate = values => {
        console.log('validate');
        const errors = {};
        if (values.cvc !== '123') {
            errors.cvc = 'Must be 3 symbols'
        }
        return errors
    };

    return (
        <Box style={styles.boxContainer}>
            <Container maxWidth="md" style={styles.externalContainer}>
                <Paper style={styles.paper}>
                    <Form 
                        onSubmit={onSubmit}
                        // validate={validate}
                        initialValues={{
                                    card: previousCardNumber, 
                                    expiryDate: previousExpiryDate, 
                                    cardName: previousCardName, 
                                    cvc: previousCvc,
                                }}
                        render={({handleSubmit, submitError}) => (
                        <form onSubmit={handleSubmit}>

                            <Typography variant="h4" align="center">Профиль</Typography>
                            <Typography variant="subtitle1" align="center">Способы оплаты</Typography>
                            <Grid container spacing={2} style={styles.innerContainer}>
                                <Grid item sm={6}>
                                    <Paper style={styles.card} elevation={3}>

                                        <Field 
                                            name="card"
                                            validate={composeValidators(required, mustBeNumber, length(16))}
                                            render={({ input, meta }) => (
                                                <TextField
                                                    id="card-number"
                                                    style={styles.textField}
                                                    label="Номер карты *"
                                                    onChange={input.onChange}
                                                    value={input.value}
                                                    placeholder="0000 0000 0000 0000"
                                                    helperText={meta.error && meta.touched ? meta.error : ''}
                                                    error={meta.active ? false : (meta.error && meta.touched)}
                                                    {...input}
                                                />
            
                                            )}
                                        />

                                        <Field 
                                            name="expiryDate"
                                            render={({ input, meta }) => (
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    helperText="Дата окончания действия *"
                                                    format="MM/dd/yyyy"
                                                    value={input.value}
                                                    onChange={input.onChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    style={styles.datePicker}
                                                    {...input}
                                                />
                                            )}
                                        />
                                    </Paper>
                                </Grid>
                                <Grid item sm={6}>
                                    <Paper style={styles.card} elevation={3}>
                                        <Field 
                                            name="cardName"
                                            render={({input, meta}) => (
                                                <TextField
                                                    id="card-username"
                                                    style={styles.textField}
                                                    label="Имя владельца *"
                                                    onChange={input.onChange}
                                                    value={input.value}
                                                    placeholder="USER NAME"
                                                    {...input}
                                                />
                                            )}
                                        />
                                        
                                        <Field 
                                            name="cvc"
                                            render={({ input, meta }) => (
                                                <div>
                                                    <TextField
                                                        id="cvc"
                                                        style={styles.textField}
                                                        label="CVC *"
                                                        onChange={input.onChange}
                                                        value={input.value}
                                                        placeholder="000"
                                                        {...input}
                                                    />

                                                    {meta.touched && meta.error &&
                                                        <Typography color="error" variant="subtitle1">{meta.error}</Typography>
                                                    }
                                                </div>
                                            )}
                                        />
                                        
                                    </Paper>
                                
                                   
                                </Grid>
                                {submitError &&
                                    <Typography color="error" variant="subtitle1">{submitError}</Typography>
                                }
                                <Button variant="contained" style={styles.button} type="submit" disabled={isLoading}>Сохранить</Button>
                            </Grid>
                        </form>
                        )}
                    />
                </Paper>
            </Container>
        </Box>
    )
};

const mapStateToProps = store => ({
    isLoading: store.isLoading,
    previousCardNumber: store.card.cardNumber, 
    previousExpiryDate: store.card.expiryDate, 
    previousCardName: store.card.cardName, 
    previousCvc: store.card.cvc,
});

Profile.propTypes = {
    isLoading: PropTypes.bool,
    postCardInfo: PropTypes.func.isRequired,
    previousCardNumber: PropTypes.string, 
    previousExpiryDate: PropTypes.string, 
    previousCardName: PropTypes.string, 
    previousCvc: PropTypes.string,
}

export default connect(mapStateToProps, {postCardInfo})(Profile);