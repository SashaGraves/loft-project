import PropTypes from 'prop-types';
import React from 'react';
import logo from 'logo-taxi.svg';
import {AuthContext} from '../AuthContext';

class Header extends React.Component {
    render() {
        let value = this.context;
        return (
            <header>
                <img src={logo} />

                <nav style={{listStyle: 'none',}}>
                    <li><a href="#" onClick={() => this.props.changePage("MAP")}>Карта</a></li>
                    <li><a href="#" onClick={() => this.props.changePage("PROFILE")}>Профиль</a></li>
                    <li>
                        {value.isLoggedIn ? 
                        <a href="#" onClick={value.logout}>Выйти</a>
                        :
                        <a href="#" onClick={() => this.props.changePage("LOGIN")}>Войти</a>
                        }
                    </li>
                </nav>
            </header>
        );
    }
};

Header.propTypes = {
    changePage: PropTypes.func
}

Header.contextType = AuthContext;
export default Header;