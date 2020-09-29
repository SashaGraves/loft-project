import {takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import {API_URL} from './constants';
import { postLoginInfo, authResponseReceived, postSuccess, postError, login } from './store.js';

const getLogin = (payload) => axios.post(API_URL + '/auth', {email: payload.email, password: payload.password})
.then((response) => response.data);

export function* myFirstSaga() {
    yield takeEvery(postLoginInfo, function* (){
        try { 
            const response = yield call(getLogin, {email: 'keks@mail.ru', password: 'keks@mail.ru'});
            console.log(response);
            yield put(authResponseReceived());
            if (response.success) {
                yield put(postSuccess());
                localStorage.setItem('token', response.token);
                // localStorage.setItem('email', action.payload.email);
                yield put(login());
            } else {
                yield put(postError(response.error));
            }
        } catch(error) {
            yield put(postError(error.message));
        }
    })
}