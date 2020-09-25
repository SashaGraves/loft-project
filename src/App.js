import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';
import {store} from './store'

import PrivateRoute from 'component/PrivateRoute';
import PublicRoute from 'component/PublicRoute';
import Profile from 'component/pages/Profile/Profile.js';
import Map from 'component/pages/Map/Map.js';
import Login from 'component/pages/Login/Login';
import SignUp from 'component/pages/Login/Login';


class App extends React.Component {
   
  render() {
    
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/login" component={Login}  />
          <PublicRoute path="/signup" component={SignUp}  />
          <PrivateRoute path="/profile" component={Profile}  />
          <PrivateRoute path="/map" component={Map} />
          <Redirect to="/login" />
        </Switch> 
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
