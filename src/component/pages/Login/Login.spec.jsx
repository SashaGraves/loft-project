import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';

describe("Login", () => {
    it("renders correctly", () => {
        const { getByLabelText, queryByText } = render(<Login />)
        expect(getByLabelText('Имя пользователя')).toHaveAttribute('name', 'username')
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password')
        expect(queryByText('Неверный')).toBeFalsy();
    });
});