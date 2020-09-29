import React from 'react';
import Profile from './Profile';
import { render } from '@testing-library/react';

describe("Profile", () => {
    it("renders correctly", () => {
        const {container, getByLabelText} = render(<Profile />);
        expect(container.innerHTML).toMatch("Профиль"),
        expect(getByLabelText('Номер карты')).toHaveAttribute('name', 'card');
        // expect(getByLabelText('Номер карты')).toHaveAttribute('name', 'card');
        // expect(getByLabelText('Номер карты')).toHaveAttribute('name', 'card');
        // expect(getByLabelText('Номер карты')).toHaveAttribute('name', 'card');
    })
})