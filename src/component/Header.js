import React from 'react';
import logo from '../public/logo-taxi.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <header>
                <img src={logo} />
            </header>
        );
    }
};

export default Header;