import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import Sidebar from './containers/Sidebar';
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">

      <LoginForm/>

      </div>
    );
  }
}

export default App;
