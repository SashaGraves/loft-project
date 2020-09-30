import React from 'react';
import Profile from './Profile';
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

describe("Profile", () => {
    it("renders correctly", () => {
        const mockStore = {
            getState: () => ({ isLoggedIn: true, }),
            subscribe: () => {},
            dispatch: () => {},
        };
        const history = createMemoryHistory();
        const { container, getByLabelText } = render(
            <Router history={history}>
                <MuiPickersUtilsProvider utils={LuxonUtils}>
                    <Provider store={mockStore}>
                        <Profile />
                    </Provider>
                </MuiPickersUtilsProvider>
            </Router>
        );
        expect(container.innerHTML).toMatch("Профиль");

        expect(getByLabelText('Номер карты *')).toHaveAttribute('name', 'card');
        expect(getByLabelText('Имя владельца *')).toHaveAttribute('name', 'cardName');
        expect(getByLabelText('CVC *')).toHaveAttribute('name', 'cvc');
    })
})