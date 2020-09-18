import React from 'react';
import './App.css';
import Header from 'component/Header.js';
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
    this.setState({isLoggedIn: false});
  }

  changePage(page) {
    this.setState({page});
  } 

  render() {
    return (
    <AuthContext.Provider value={{
      login: this.login,
      logout: this.logout,
      isLoggedIn: this.state.isLoggedIn,
    }}>
     
      <Header changePage={this.changePage}/>
      {
        {
          PROFILE: this.state.isLoggedIn && <Profile />,
          MAP: this.state.isLoggedIn && <Map />,
          LOGIN: <Login changePage={this.changePage} />,
          SIGNUP: <SignUp changePage={this.changePage} />
        }[this.state.page]
      }

      {`${this.state.isLoggedIn}`}
    </AuthContext.Provider>
    );
  }
}

export default App;
