import {takeEvery, call, put, fork} from 'redux-saga/effects';
import axios from 'axios';
import {API_URL} from './constants';
import { postLoginInfo,
        authResponseReceived,
        postSuccess,
        postError,
        login,
        postRegisterInfo,
        postCardInfo,
        setCardData,
        getCardInfo,
        getAddresses,
        setAddressList } from './store.js';



export function* rootSaga() {
    yield fork(loginSaga);
    yield fork(registerSaga);
    yield fork(paymentSaga);
    yield fork(addressListSaga);
}

const postLoginRequest = (payload) => axios.post(API_URL + '/auth', {email: payload.email, password: payload.password})
.then((response) => response.data);

export function* loginSaga() {
    yield takeEvery(postLoginInfo, function* ({payload}){
        console.log({email: payload.email, password: payload.password})
        try { 
            const response = yield call(postLoginRequest, {email: payload.email, password: payload.password});
            console.log(response);
            yield put(authResponseReceived());
            if (response.success) {
                yield put(postSuccess());
                localStorage.setItem('token', response.token);
                yield put(login());
            } else {
                yield put(postError(response.error));
            }
        } catch(error) {
            yield put(postError(error.message));
        }
    })
}

const postRegisterRequest = ({email, password, name, surname}) => axios.post(API_URL + '/register', {email, password, name, surname})
.then((response) => response.data)

export function* registerSaga() {
    yield takeEvery(postRegisterInfo, function* ({payload}){
        const { email, password, name, surname } = payload;
        console.log({ email, password, name, surname });
        try {
            const response = yield call(postRegisterRequest, { email, password, name, surname });
            console.log(response);
            yield put(authResponseReceived())
            if (response.success) {
                yield put(postSuccess());
                localStorage.setItem('token', response.token);
                yield put(login());
            } else {
                yield put(postError(response.error));
            }
        } catch(error) {
            yield put(postError(error.message));
        }
    })
}

const postCardRequest = ({cardNumber, expiryDate, cardName, cvc, token}) => axios.post(API_URL + '/card', {cardNumber, expiryDate, cardName, cvc, token})
.then((response) => response.data);

const getCardRequest = (token) => axios.get(API_URL + `/card?token=${token}`)
.then((response) => response.data);

function* paymentSaga() {
    yield takeEvery(postCardInfo, function* ({payload}){
        const authToken = localStorage.getItem('token');
        const {cardNumber, expiryDate, cardName, cvc} = payload;
        console.log({cardNumber, expiryDate, cardName, cvc, authToken});
        try {
            const response = yield call(postCardRequest, {cardNumber, expiryDate, cardName, cvc, authToken});
            console.log(response);
            yield put(authResponseReceived())
            if (response.success) {
                yield put(postSuccess());
                yield put(setCardData({cardNumber, expiryDate, cardName, cvc}));
            } else {
                yield put(postError(response.error));
            }
        } catch(error) {
            yield put(postError(error.message));
        }
    })

    yield takeEvery(getCardInfo, function* (){
        const authToken = localStorage.getItem('token');
        console.log(authToken);
        try {
            const response = yield call(getCardRequest, authToken);
            console.log(response);
            yield put(authResponseReceived())
            if (response.id) {
                yield put(postSuccess());
                const { cardNumber, expiryDate, cardName, cvc } = response;
                yield put(setCardData({cardNumber, expiryDate, cardName, cvc}));
            } else {
                yield put(postError(response.error));
            }
        } catch(error) {
            console.log(error);
            yield put(postError(error.message));
        }
    });
}

const getAddressesRequest = () => axios.get(API_URL + '/addressList').then((response) => response.data);

function* addressListSaga() {
    yield takeEvery(getAddresses, function* () {
        try {
            const response = yield call(getAddressesRequest);
            console.log(response)
            yield put(setAddressList(response.addresses))
            yield put(authResponseReceived())
        } catch(error) {
            yield put(postError(error.message));
        }
    });
}