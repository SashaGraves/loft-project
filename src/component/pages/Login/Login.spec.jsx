import React from 'react';
import Login from './Login';
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("Login", () => {
    it("renders correctly", () => {
        const postLoginInfo = () => {};
        const mockStore = {
            getState: () => ({ isLoggedIn: true, 
                isLoading: false,
                credential: {
                    credentialError: false,
                    credentialMessage: "",
                }
            }),
            subscribe: () => {},
            dispatch: () => {},
        };
        const history = createMemoryHistory();
        const { queryByText, getByLabelText } = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <Login postLoginInfo={postLoginInfo}/>
                </Provider>
            </Router>
        );

        expect(getByLabelText('Email пользователя')).toHaveAttribute('name', 'email')
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password')
        expect(queryByText('Неверный')).toBeFalsy();
    });
});