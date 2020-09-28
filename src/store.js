import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {createAction, handleActions} from 'redux-actions';
import { requestMiddleware } from 'requestMiddleware';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    credential: {
        credentialError: false,
        credentialMessage: '',
    },
    user: {
        email: localStorage.getItem('email') || "",
        name: localStorage.getItem('name') || "",
        surname: localStorage.getItem('surname') || "",
    },
    card: {
        cardNumber: "",
        expiryDate: "",
        cardName: "",
        cvc: "",
    },
    addresses: {
        address1: "",
        address2: "",
        addressList: "",
    }
};

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");
export const postRegisterInfo = createAction("POST_REGISTER_INFO");
export const authResponseReceived = createAction("REGISTER_INFO_RECEIVED");
export const postLoginInfo = createAction("POST_LOGIN_INFO");
export const postError = createAction("POST_ERROR");
export const postSuccess = createAction("POST_SUCCESS");

const isLoggedIn = handleActions({
    [login]: () => true,
    [logout]: () => false,
}, initialState.isLoggedIn);

const isLoading = handleActions({
    [postRegisterInfo]: () => true,
    [authResponseReceived]: () => false,
    [postLoginInfo]: () => true,
}, initialState.isLoading)

const credential = handleActions({
    [postError]: (state, action) => ({
        credentialError: true,
        credentialMessage: action.payload,
    }),
    [postSuccess]: (state) => ({...state, credentialError: false})
}, initialState.credential);

const user = handleActions({
}, initialState.user);

const rootReducer = combineReducers({
    isLoggedIn,
    isLoading,
    credential,
    user,
    // card,
    // addresses,
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(requestMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);