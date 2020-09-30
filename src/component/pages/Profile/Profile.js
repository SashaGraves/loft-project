import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Paper, Typography, TextField, Grid, Button, Container, Box } from '@material-ui/core';
import {KeyboardDatePicker} from '@material-ui/pickers';
import Background from 'login-background.jpg';
import {postCardInfo} from 'store.js';

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

const Profile = ({isLoading, postCardInfo}) => {
    const [card, setCard] = React.useState("");
    const [date, setDate] = React.useState(new Date());
    const [username, setUsername] = React.useState("");
    const [cvc, setCvc] = React.useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        postCardInfo({
            cardNumber: card, 
            expiryDate: date, 
            cardName: username, 
            cvc: cvc,
        });
    };

    return (
        <Box style={styles.boxContainer}>
            <Container maxWidth="md" style={styles.externalContainer}>
                <Paper style={styles.paper}>
                    <form onSubmit={submitHandler}>
                        <Typography variant="h4" align="center">Профиль</Typography>
                        <Typography variant="subtitle1" align="center">Способы оплаты</Typography>
                        <Grid container spacing={2} style={styles.innerContainer}>
                            <Grid item sm={6}>
                                <Paper style={styles.card} elevation={3}>
                                    <TextField
                                        id="card-number"
                                        name="card"
                                        style={styles.textField}
                                        label="Номер карты *"
                                        onChange={(e) => setCard(e.target.value)}
                                        value={card}
                                        placeholder="0000 0000 0000 0000"
                                    />
                                    <KeyboardDatePicker
                                        name="expiry-date"
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Дата окончания действия"
                                        format="MM/dd/yyyy"
                                        value={date}
                                        onChange={setDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        style={styles.datePicker}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item sm={6}>
                                <Paper style={styles.card} elevation={3}>
                                    <TextField
                                        id="card-username"
                                        name="cardName"
                                        style={styles.textField}
                                        label="Имя владельца *"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        placeholder="USER NAME"
                                    />
                                    <TextField
                                        id="cvc"
                                        name="cvc"
                                        style={styles.textField}
                                        label="CVC *"
                                        onChange={(e) => setCvc(e.target.value)}
                                        value={cvc}
                                        placeholder="000"
                                    />
                                </Paper>
                            </Grid>
                            <Button variant="contained" style={styles.button} type="submit" disabled={isLoading}>Сохранить</Button>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    )
};

const mapStateToProps = store => ({
    isLoading: store.isLoading,
});

Profile.propTypes = {
    isLoading: PropTypes.bool,
    postCardInfo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, {postCardInfo})(Profile);