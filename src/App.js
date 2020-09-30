import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import './App.css';
import {store, logout, login} from './store'

import PrivateRoute from 'component/PrivateRoute';
import PublicRoute from 'component/PublicRoute';
import Profile from 'component/pages/Profile/Profile.js';
import Map from 'component/pages/Map/Map.js';
import Login from 'component/pages/Login/Login';
import SignUp from 'component/pages/SignUp/SignUp';


class App extends React.Component {

   componentDidMount() {
      const authToken = localStorage.getItem('token');
      if (authToken) {
        store.dispatch(login())
      } else {
        store.dispatch(logout())
      }
   }
   
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
