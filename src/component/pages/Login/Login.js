import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import { AuthContext } from '../../../App';
import LoginTemplate from './LoginTemplate';

class Login extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.changePage("MAP");
    }



    render() {
        return (
            <AuthContext.Consumer>
                {(contextValue) => {
                    <LoginTemplate onSubmit={onSubmit} />
                }}
            </AuthContext.Consumer>

        );
    }
}

Login.propTypes = {
    changePage: PropTypes.func
};

Login.contextType = AuthContext;

export default Login;


// https://github.com/facebook/react/issues/13969 тред про это