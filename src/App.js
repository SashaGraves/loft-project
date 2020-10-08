import React from 'react';
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import './App.css';
import {store, logout, login, getCardInfo} from './store'

import PrivateRoute from 'component/PrivateRoute';
import PublicRoute from 'component/PublicRoute';
import Profile from 'component/pages/Profile/Profile.js';
import Map from 'component/pages/Map/Map.js';
import Login from 'component/pages/Login/Login';
import SignUp from 'component/pages/SignUp/SignUp';

const authToken = localStorage.getItem('token');
      if (authToken) {
        store.dispatch(login())
        if (store.getState().card.cardNumber === "") {
            store.dispatch(getCardInfo());
        }
      } else {
        store.dispatch(logout())
      }


class App extends React.Component {
   
  render() {
    
    return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <BrowserRouter>
          <Switch>
            <PublicRoute path="/login" component={Login}  />
            <PublicRoute path="/signup" component={SignUp}  />
            <PrivateRoute path="/profile" component={Profile}  />
            <PrivateRoute path="/map" component={Map} />
            <Redirect to="/login" />
          </Switch> 
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </Provider>
    );
  }
}

export default App;
