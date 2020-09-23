import React from 'react';
import { AuthContext } from '../../../AuthContext';
import SignUpTemplate from './SignUpTemplate';

const SignUp = ({}) => {
    const contextValue = React.useContext(AuthContext);
    

    const onSubmit = (e) => {
        e.preventDefault();
        contextValue.login('test', '12345');
        contextValue.changePage("MAP");
    }
    
    const goToLogin = () => {
        contextValue.changePage("LOGIN");
    }

    return (
        <SignUpTemplate submitHandler={onSubmit} goToLogin={goToLogin} />
    );

}


export default SignUp;