import {createStore} from 'redux';
import {createAction} from 'redux-actions';

const initialState = {
    isLoggedIn: false,
    user: {
        name: "",
        password: "",
    },
};

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");
export const setUserCredentials = createAction("SET_USER_CREDENTIALS")




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case login.toString(): 
            return {
                ...state, 
                isLoggedIn: true
            };
        case logout.toString():
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
}

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);