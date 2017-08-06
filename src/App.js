import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
