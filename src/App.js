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
    console.log('here');
    console.log(email);
    console.log(password);
    this.setState(state => ({isLoggedIn: true}));
  }

  logout() {
    this.setState({isLoggedIn: false});
  }

  changePage(page) {
    this.setState({page});
  } 

  contextValue = {
    login: this.login,
    logout: this.logout,
    isLoggedIn: true,
  };


  render() {
    console.log('State'+this.state.isLoggedIn);
    
    return (
    <AuthContext.Provider value={this.contextValue}>
      {console.log(this.state.isLoggedIn)}
     
      {this.state.isLoggedIn && <h1>HELLO</h1>}
      <Header changePage={this.changePage}/>
      {
        {
          PROFILE: <Profile />,
          MAP: <Map />,
          LOGIN: <Login changePage={this.changePage} />,
          SIGNUP: <SignUp changePage={this.changePage} />
        }[this.state.page]
      }
    </AuthContext.Provider>
    );
  }
}

export default App;
