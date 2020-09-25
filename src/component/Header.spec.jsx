import React from 'react';
import Header from './Header';
import {render} from '@testing-library/react';

describe('Header', () => {
    it('renders correctly', () => {
        const {getByText} = render(<Header />);
        expect(getByText('Профиль')).toBeTruthy();
    })
});