import {API_URL} from './constants';
import axios from 'axios';
import {login, 
    postRegisterInfo, 
    authResponseReceived, 
    postSuccess, 
    postError,
    postLoginInfo} from 'store.js';

export const requestMiddleware = store => next => action => {
    switch(action.type) {
        case postRegisterInfo.toString():
            let { email, password, name, surname } = action.payload;
            axios.post(API_URL + '/register', {email, password, name, surname})
                .then((response) => {
                    store.dispatch(authResponseReceived());
                    console.log(response.data);
                    if (response.data.success) {
                        store.dispatch(postSuccess());
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('email', email);
                        localStorage.setItem('name', name);
                        localStorage.setItem('surname', surname);
                        store.dispatch(login());
                    } else {
                        store.dispatch(postError(response.data.error));
                    }
                })
                .catch(error => {
                    store.dispatch(authResponseReceived());
                    store.dispatch(postError(error.message));
                });
            break;
                
        case postLoginInfo.toString():
            axios.post(API_URL + '/auth', {email: action.payload.email, password: action.payload.password})
                .then((response) => {
                    store.dispatch(authResponseReceived());
                    console.log(response.data);
                    if (response.data.success) {
                        store.dispatch(postSuccess());
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('email', email);
                        store.dispatch(login());
                    } else {
                        store.dispatch(postError(response.data.error));
                    }
                })
                .catch(error => {
                    store.dispatch(authResponseReceived());
                    store.dispatch(postError(error.message));
                });
        
        default: 
            break
    }
    
    return next(action);
}