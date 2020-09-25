import React from 'react';
import SignUp from './SignUp';
import { render } from '@testing-library/react';

describe("SignUp", () => {
    it("renders correctly", () => {
        const { getByLabelText, queryByText } = render(<SignUp />)
        expect(getByLabelText('Адрес электронной почты')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
        expect(getByLabelText('Имя')).toHaveAttribute('name', 'name');
        expect(getByLabelText('Фамилия')).toHaveAttribute('name', 'surname');
        expect(queryByText('Неверный')).toBeFalsy();
    });
}); 