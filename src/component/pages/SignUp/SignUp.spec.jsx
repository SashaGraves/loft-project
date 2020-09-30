import React from 'react';
import SignUp from './SignUp';
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("SignUp", () => {
    it("renders correctly", () => {
        const postRegisterInfo = () => {};
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
                    <SignUp postRegisterInfo={postRegisterInfo}/>
                </Provider>
            </Router>
        );

        expect(getByLabelText('Адрес электронной почты *')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Пароль *')).toHaveAttribute('name', 'password');
        expect(getByLabelText('Имя *')).toHaveAttribute('name', 'name');
        expect(getByLabelText('Фамилия *')).toHaveAttribute('name', 'surname');
        expect(queryByText('Неверный')).toBeFalsy();
    });
}); 