import React, { useEffect, useState } from 'react';
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

const Addresses = ({
    addressFrom: storeAddressFrom,
    addressTo: storeAddressTo,
    getAddresses, 
    isLoading, 
    addressList, 
    setAddressFrom: setStoreAddressFrom, 
    setAddressTo: setStoreAddressTo, 
    getRoutes}) => {
    const [addressListFrom, setAddressFromList] = useState([]);
    const [addressListTo, setAddressToList] = useState([]);
    const [disableButton, setDisableButton] = useState(false);

    useEffect(() => {
        getAddresses()
    }, []);

    useEffect(() => {
        setAddressFromList(addressList);
        setAddressToList(addressList);
    }, [addressList]);

    useEffect(() => {
        const addressFromIndex = addressList.findIndex((item) => item[1] === storeAddressFrom); 
        if (addressFromIndex !== -1) {
            const newAddressToList = addressList.slice();
            newAddressToList.splice(addressFromIndex, 1);
            setAddressToList(newAddressToList);
        }
    }, [storeAddressFrom]);

    const onSubmit = (e) => {
        e.preventDefault();
        getRoutes([storeAddressFrom, storeAddressTo]);
    };

    useEffect(() => {
        const disabledButton = shouldButtonDisable();
        setDisableButton(disabledButton);
    });

    const shouldButtonDisable = () => {
        if (isLoading) {
            return true
        }
        if (!storeAddressFrom || !storeAddressTo) {
            return true
        }
        return false
    }

    return(
        <Paper style={styles.paper}>
            <form onSubmit={(e) => onSubmit(e)}>
                <FormControl style={styles.formControl}>
                    <InputLabel id="from-location">Откуда</InputLabel>
                    <Select
                        style={styles.select}
                        labelId="from-location"
                        id="from-location"
                        value={storeAddressFrom}
                        onChange={(event) => {setStoreAddressFrom(event.target.value)}}
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
                        value={storeAddressTo}
                        onChange={(event) => {setStoreAddressTo(event.target.value)}}
                    >
                        {addressListTo.map(item => (<MenuItem key={item[0]} value={item[1]}>{item[1]}</MenuItem>))}
                    
                    </Select>
                </FormControl>
                <Button type="submit" style={styles.button} disabled={disableButton}>Вызвать такси</Button>
            </form>
        </Paper>
    )
}

const mapStateToProps = store => ({
    isLoading: store.isLoading,
    addressList: store.addresses.addressList,
    addressFrom: store.addresses.address1,
    addressTo: store.addresses.address2,
});

Addresses.propTypes = {
    isLoading: PropTypes.bool,
    addressList: PropTypes.array,
    getAddresses: PropTypes.func.isRequired,
    setAddressFrom: PropTypes.func.isRequired, 
    setAddressTo: PropTypes.func.isRequired,
    getRoutes: PropTypes.func,
    addressFrom: PropTypes.string,
    addressTo: PropTypes.string,
}

export default connect(mapStateToProps, {getAddresses, setAddressFrom, setAddressTo, getRoutes})(Addresses);
