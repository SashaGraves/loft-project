import React from 'react';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../AuthContext';
import LoginTemplate from './LoginTemplate';

class Login extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.changePage("MAP");
    }



    render() {
        return (
            <AuthContext.Consumer>
                {value => <LoginTemplate onSubmit={this.onSubmit} login={value.login} />}
            </AuthContext.Consumer>

        );
    }
}

Login.propTypes = {
    changePage: PropTypes.func
};


export default Login;
