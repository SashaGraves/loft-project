import React from 'react';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../AuthContext';
import LoginTemplate from './LoginTemplate';

class Login extends React.Component {

    goToMap = (e) => {
        this.props.changePage("MAP");
    }

    goToSignUp = () => {
        this.props.changePage("SIGNUP");
    }

    render() {
        return (
            <AuthContext.Consumer>
                {value => <LoginTemplate goToMap={this.goToMap} contextValue={value} goToSignUp={this.goToSignUp} />}
            </AuthContext.Consumer>

        );
    }
}

Login.propTypes = {
    changePage: PropTypes.func
};


export default Login;
