import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Header from 'component/Header';

const PrivateRoute = ({path, component: Component, isLoggedIn}) => (
    <Route path={path} render={(routeProps) => (
        isLoggedIn ?
        <>
            <Header {...routeProps} /> 
            <Component {...routeProps} /> 
        </>
        :
        <Redirect to="/login"/>
        )}
    />

);
    

export default PrivateRoute;