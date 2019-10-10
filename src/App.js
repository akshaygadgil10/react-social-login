import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';
import Google from './components/Google';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          login with social networking sites
        </p>
        <Facebook/><br></br>

        <Google/>
        
      </div>
    );
  }
}

export default App;
