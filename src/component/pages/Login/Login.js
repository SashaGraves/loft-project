import React from 'react';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../AuthContext';
import LoginTemplate from './LoginTemplate';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
        }
        
    }
    
    changeInput = (key, value) => {
        this.setState({[key]: value});
        if (this.state[key]) {
            this.setState({[key + 'Error']: 'success'});
        } else {
            this.setState({[key + 'Error']: 'error'});
        }
            
    }
    
    goToSignUp = () => {
        this.context.changePage("SIGNUP");
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        this.context.login('test', '12345');
        this.context.changePage("MAP");
    }

    render() {
        console.log(this.state.usernameError);
        console.log(this.state.username);

        return (
            <LoginTemplate 
                goToSignUp={this.goToSignUp} 
                submitHandler={this.submitHandler} 
                username={this.state.username} 
                password={this.state.password} 
                changeInput={this.changeInput}
                usernameError={this.state.usernameError} 
                passwordError={this.state.passwordError}
            />
        );
    }
}

Login.propTypes = {
    contextValue: PropTypes.object,
};

Login.contextType = AuthContext;

export default Login;
