import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';

describe("Login", () => {
    it("renders correctly", () => {
        const { getByLabelText, queryByText } = render(<Login />)
        expect(getByLabelText('Имя пользователя')).toHaveAttribute('name', 'name')
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password')
        expect(queryByText('Неверный')).toBeFalsy();
    })

    describe("Inputs in login form", () => {
        test("warning when try to submit empty inputs", () => {
            const {getByLabelText, getByText, container} = render(<Login />);
            const nameInput = getByLabelText('Имя пользователя');
            nameInput = '';
            fireEvent.click(getByText('Войти'));
            expect(container.innerHTML).toMatch('Неверный логин')
        })
    })
});