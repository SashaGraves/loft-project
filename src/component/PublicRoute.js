import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PublicRoute = ({path, component: Component, isLoggedIn}) => (
        <Route path={path} render={(routeProps) => (
            !isLoggedIn ?
            <Component {...routeProps} /> 
            :
            <Redirect to="/profile"/>
            )}
        />
);
    

export default PublicRoute;