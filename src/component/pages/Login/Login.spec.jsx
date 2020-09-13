import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';

describe("Login", () => {
    it("renders correctly", () => {
        const { getByLabelText } = render(<Login />)
        expect(getByLabelText('Имя пользователя')).toHaveAttribute('name', 'name')
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password')
    })
});