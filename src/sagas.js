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
        setAddressList,
        getRoutes,
        setRouteList } from './store.js';



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
        try { 
            const response = yield call(postLoginRequest, {email: payload.email, password: payload.password});
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
        try {
            const response = yield call(postRegisterRequest, { email, password, name, surname });
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
        try {
            const response = yield call(postCardRequest, {cardNumber, expiryDate, cardName, cvc, authToken});
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
        try {
            const response = yield call(getCardRequest, authToken);
            yield put(authResponseReceived())
            if (response.id) {
                yield put(postSuccess());
                const { cardNumber, expiryDate, cardName, cvc } = response;
                yield put(setCardData({cardNumber, expiryDate, cardName, cvc}));
            } else {
                yield put(postError(response.error));
            }
        } catch(error) {
            yield put(postError(error.message));
        }
    });
}

const getAddressesRequest = () => axios.get(API_URL + '/addressList').then((response) => response.data);
const getRoutesRequest = ([address1, address2]) => axios.get(API_URL + `/route?address1=${address1}&address2=${address2}`).then((response) => response.data)

function* addressListSaga() {
    yield takeEvery(getAddresses, function* () {
        try {
            const response = yield call(getAddressesRequest);
            yield put(setAddressList(response.addresses))
            yield put(authResponseReceived())
        } catch(error) {
            yield put(postError(error.message));
        }
    });

    yield takeEvery(getRoutes, function* ({payload}) {
        try {
            const response = yield call(getRoutesRequest, payload);
            yield put(setRouteList(response))
            yield put(authResponseReceived())
        } catch(error) {
            yield put(postError(error.message));
            
        }
    });
}