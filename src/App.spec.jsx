import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('component/Login/Login', () => ({Login: () => <div>Login component</div>}))
jest.mock('component/Profile/Profile', () => ({Profile: () => <div>Profile component</div>}))
jest.mock('component/Map/Map', () => ({Map: () => <div>Map component</div>}))
jest.mock('component/SignUp/SignUp', () => ({SignUp: () => <div>SignUp component</div>}))
jest.mock('component/Header', () => ({Header: () => <div>Header component</div>}))


describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(<App />);
        expect(container.innerHTML).toMatch("Header component");
    })
    
    describe("when click om navigation buttons", () => {
        it("opens corresponding page", () => {
            const { getByText, container } = render(<App />)
            
            fireEvent.click(getByText(''))
        })
    })
})
