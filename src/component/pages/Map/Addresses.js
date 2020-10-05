import React from 'react';
import { connect } from 'react-redux';
import {getAddresses, setAddressFrom, setAddressTo, getRoutes} from 'store';
import {PropTypes} from 'prop-types';
import {Paper, FormControl, Button, InputLabel, Select, MenuItem} from '@material-ui/core';


const styles = {
    paper: {
        padding: '35px 20px',
        top: 0,
        left: 20,
        position: 'absolute',
        maxWidth: '30%',
    }, 
    button: {
        backgroundColor: '#ffc617',
        textTransform: 'none',
        margin: '15px auto',
    },
    formControl: {
        display: 'block',
        minWidth: 320,
    },
    select: {
        minWidth: 300,
    }
}

const Addresses = ({getAddresses, isLoading, addressList, setAddressFrom: setStoreAddressFrom, setAddressTo: setStoreAddressTo, getRoutes}) => {
    const [addressFrom, setAddressFrom] = React.useState('');
    const [addressTo, setAddressTo] = React.useState('');
    const [addressListFrom, setAddressFromList] = React.useState([]);
    const [addressListTo, setAddressToList] = React.useState([]);

    React.useEffect(() => {
        getAddresses()
    }, []);

    React.useEffect(() => {
        setAddressFromList(addressList);
        setAddressToList(addressList);
    }, [addressList]);

    React.useEffect(() => {
        const addressFromIndex = addressList.findIndex((item) => item[1] === addressFrom); 
        if (addressFromIndex !== -1) {
            const newAddressToList = addressList.slice();
            newAddressToList.splice(addressFromIndex, 1);
            setAddressToList(newAddressToList);
        }
    }, [addressFrom]);

    React.useEffect(() => {
        setStoreAddressFrom(addressFrom);
        setStoreAddressTo(addressTo);
    }, [addressFrom, addressTo]);

    const onSubmit = (e) => {
        e.preventDefault();
        getRoutes([addressFrom, addressTo]);
    };

    return(
        <Paper style={styles.paper}>
            <form onSubmit={(e) => onSubmit(e)}>
                <FormControl style={styles.formControl}>
                    <InputLabel id="from-location">Откуда</InputLabel>
                    <Select
                        style={styles.select}
                        labelId="from-location"
                        id="from-location"
                        value={addressFrom}
                        onChange={(event) => {setAddressFrom(event.target.value)}}
                    >
                        {addressListFrom.map(item => (<MenuItem key={item[0]} value={item[1]}>{item[1]}</MenuItem>))}
                    
                    </Select>
                </FormControl>
                <FormControl style={styles.formControl}>
                    <InputLabel id="to-location">Куда</InputLabel>
                    <Select
                        style={styles.select}
                        labelId="to-location"
                        id="to-location"
                        value={addressTo}
                        onChange={(event) => {setAddressTo(event.target.value)}}
                    >
                        {addressListTo.map(item => (<MenuItem key={item[0]} value={item[1]}>{item[1]}</MenuItem>))}
                    
                    </Select>
                </FormControl>
                <Button type="submit" style={styles.button} disabled={isLoading}>Вызвать такси</Button>
            </form>
        </Paper>
    )
}

const mapStateToProps = store => ({
    isLoading: store.isLoading,
    addressList: store.addresses.addressList,
});

Addresses.propTypes = {
    isLoading: PropTypes.bool,
    addressList: PropTypes.array,
    getAddresses: PropTypes.func.isRequired,
    setAddressFrom: PropTypes.func.isRequired, 
    setAddressTo: PropTypes.func.isRequired,
    getRoutes: PropTypes.func,
}

export default connect(mapStateToProps, {getAddresses, setAddressFrom, setAddressTo, getRoutes})(Addresses);
