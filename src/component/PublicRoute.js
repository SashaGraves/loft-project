import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({path, component: Component, isLoggedIn}) => (
        <Route path={path} render={(routeProps) => (
            !isLoggedIn ?
            <Component {...routeProps} /> 
            :
            <Redirect to="/profile"/>
            )}
        />
);
    
const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(PublicRoute);