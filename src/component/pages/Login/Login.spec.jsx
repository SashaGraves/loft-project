import React from 'react';
import Login from './Login';
import { render, fireEvent, act } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import LoginForm from "./Login-form";
import { postLoginInfo } from 'store';

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

describe("Login Form", () => {
    describe("on submit", () => {
        it('dispatches login info', () => {
            const mockStore = {
                getState: () => ({ isLoggedIn: true, 
                    isLoading: false,
                    credential: {
                        credentialError: false,
                        credentialMessage: "",
                    }
                }),
                subscribe: () => {},
                dispatch: jest.fn(),
            };
            const history = createMemoryHistory();
            const { getByLabelText, getByText } = render(
                <Router history={history}>
                    <Provider store={mockStore}>
                        <LoginForm />
                    </Provider>
                </Router>
            )
            const emailInput = getByLabelText("Email пользователя")
            const passwordInput = getByLabelText("Пароль") 

            fireEvent.change(emailInput, {target: { value: "test@test.test" }})
            fireEvent.change(passwordInput, {target: { value: "testtest" }})
            fireEvent.click(getByText("Войти"))

            expect(mockStore.dispatch).toBeCalledWith({
                payload: {email: "test@test.test", password: "testtest" },
                type: "POST_LOGIN_INFO",
            })
        });
    })
        
});