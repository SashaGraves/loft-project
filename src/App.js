import React from 'react';
import './App.css';
import Header from 'component/Header.js';
import Profile from 'component/pages/Profile/Profile.js';
import Map from 'component/pages/Map/Map.js';
import Login from 'component/pages/Login/Login';
import SignUp from 'component/pages/SignUp/SignUp';

export const AuthContext = React.createContext({
  isLoggedIn: false,
});


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
    this.setState({...this.state, isLoggedIn: true});
  }

  logout() {
    this.setState({...this.state, isLoggedIn: false});
  }

  changePage(page) {
    this.setState({page});
  } 

  render() {
    return (
    <AuthContext.Provider value={
      {
        login: this.login,
        logout: this.logout,
        isLoggedIn: this.isLoggedIn,
      }}
    >
      <Header changePage={this.changePage}/>
      {
        {
          PROFILE: <Profile />,
          MAP: <Map />,
          LOGIN: (
              <Login changePage={this.changePage} />
            ),
          SIGNUP: <SignUp changePage={this.changePage} />
        }[this.state.page]
      }
    </AuthContext.Provider>
    );
  }
}

export default App;
