import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import PrivateRoute from 'component/PrivateRoute';
import PublicRoute from 'component/PublicRoute';
import Profile from 'component/pages/Profile/Profile.js';
import Map from 'component/pages/Map/Map.js';
import Login from 'component/pages/Login/Login';
import SignUp from 'component/pages/SignUp/SignUp';
import {AuthContext} from './AuthContext';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      page: "LOGIN",
      isLoggedIn: false,
      email: '',
    }
   
    this.changePage = this.changePage.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

  }

  login(email, password) {
    this.setState({isLoggedIn: true});
  }

  logout() {
    this.setState({
        isLoggedIn: false,
        page: "LOGIN",
    });
    
  }

  changePage(page) {
    this.setState({page});
  } 

  render() {
    
    return (
    <BrowserRouter>
      <AuthContext.Provider value={{
        login: this.login,
        logout: this.logout,
        isLoggedIn: this.state.isLoggedIn,
        changePage: this.changePage,
      }}>

          <Switch>
            <PublicRoute path="/login" component={Login} isLoggedIn={this.state.isLoggedIn} />
            <PublicRoute path="/signup" component={SignUp} isLoggedIn={this.state.isLoggedIn} />
            <PrivateRoute path="/profile" component={Profile} isLoggedIn={this.state.isLoggedIn} />
            <PrivateRoute path="/map" component={Map} isLoggedIn={this.state.isLoggedIn}/>
            <Redirect to="/login" />
          </Switch>
          
      </AuthContext.Provider>
    </BrowserRouter>
    );
  }
}

export default App;
