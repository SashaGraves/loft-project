import React from 'react';
import './App.css';
import Header from 'component/Header.js';
import Profile from 'component/Profile/Profile.js';
import Map from 'component/Map/Map.js';
import Login from 'component/Login/Login';
import SignUp from 'component/SignUp/SignUp';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      type: "LOGIN",
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage(type) {
    this.setState({type});
  } 

  render() {
    return (
    <div className="App">
      <Header changePage={this.changePage}/>
      {
        {
          PROFILE: <Profile />,
          MAP: <Map />,
          LOGIN: <Login />,
          SIGNUP: <SignUp />
        }[this.state.type]
      }
    </div>
    );
  }
}

export default App;
