import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {createAction, handleActions} from 'redux-actions';
import createSagaMiddleWare from 'redux-saga';
import {rootSaga} from './sagas';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    credential: {
        credentialError: false,
        credentialMessage: '',
    },
    user: {
        email: "",
        name: "",
        surname: "",
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
        addressList: [],
        routeList: []
    }
};

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");

export const postRegisterInfo = createAction("POST_REGISTER_INFO");
export const postLoginInfo = createAction("POST_LOGIN_INFO");
export const postCardInfo = createAction("POST_CARD_INFO");

export const getCardInfo = createAction("GET_CARD_INFO");
export const getAddresses = createAction("GET_ADDRESSES");
export const getRoutes = createAction("GET_ROUTES");

export const setCardData = createAction("SET_CARD_DATA");
export const setAddressList = createAction("SET_ADDRESS_LIST");
export const setAddressFrom = createAction("SET_ADDRESS_FROM");
export const setAddressTo = createAction("SET_ADDRESS_TO");
export const setRouteList = createAction("SET_ROUTE_LIST");

export const postError = createAction("POST_ERROR");
export const postSuccess = createAction("POST_SUCCESS");
export const authResponseReceived = createAction("REGISTER_INFO_RECEIVED");

const isLoggedIn = handleActions({
    [login]: () => true,
    [logout]: () => {
        localStorage.removeItem('token');
        return false;
    },
}, initialState.isLoggedIn);

const isLoading = handleActions({
    [postRegisterInfo]: () => true,
    [authResponseReceived]: () => false,
    [postLoginInfo]: () => true,
    [postCardInfo]: () => true,
    [getCardInfo]: () => true,
    [getAddresses]: () => true,
    [getRoutes]: () => true,
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

const card = handleActions({
    [setCardData]: (state, action) => ({
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc,
    })
}, initialState.card);

const addresses = handleActions({
    [setAddressList]: (state, action) => {
        const addressList = action.payload;
        const indexedAddressList = addressList.map((item, index) => [index, item]);
        return {...state, addressList: indexedAddressList}
    },
    [setAddressFrom]: (state, action) => ({...state, address1: action.payload}),
    [setAddressTo]: (state, action) => ({...state, address2: action.payload}),
    [setRouteList]: (state, action) => ({...state, routeList: action.payload})
    
}, initialState.addresses);

const rootReducer = combineReducers({
    isLoggedIn,
    isLoading,
    credential,
    user,
    card,
    addresses,
});

const sagaMiddleware = createSagaMiddleWare();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
    )

);

sagaMiddleware.run(rootSaga)
