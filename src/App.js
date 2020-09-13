import React from 'react';
import './App.css';
import Header from 'component/Header.js';
import Profile from 'component/pages/Profile/Profile.js';
import Map from 'component/pages/Map/Map.js';
import Login from 'component/pages/Login/Login';
import SignUp from 'component/pages/SignUp/SignUp';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      page: "SIGNUP",
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({page});
  } 

  render() {
    return (
    <div className="App">
      <Header changePage={this.changePage}/>
      {
        {
          PROFILE: <Profile />,
          MAP: <Map />,
          LOGIN: <Login changePage={this.changePage} />,
          SIGNUP: <SignUp changePage={this.changePage} />
        }[this.state.page]
      }
    </div>
    );
  }
}

export default App;
