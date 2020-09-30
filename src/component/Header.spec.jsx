import React from 'react';
import Header from './Header';
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe('Header', () => {
    it('renders correctly', () => {
        const mockStore = {
            getState: () => ({ isLoggedIn: true, }),
            subscribe: () => {},
            dispatch: () => {},
        };
        const history = createMemoryHistory();
        const { getByText } = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <Header />
                </Provider>
            </Router>
        );

        expect(getByText('Карта')).toBeTruthy();
    })
});