import PropTypes from 'prop-types';
import React from 'react';
import logo from 'logo-taxi.svg';

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

                <nav style={{listStyle: 'none',}}>
                    <li><a href="#" onClick={() => this.props.changePage("MAP")}>Карта</a></li>
                    <li><a href="#" onClick={() => this.props.changePage("PROFILE")}>Профиль</a></li>
                    <li><a href="#" onClick={() => this.props.changePage("LOGIN")}>Логин</a></li>
                </nav>
            </header>
        );
    }
};

Header.propTypes = {
    changePage: PropTypes.func
}

export default Header;