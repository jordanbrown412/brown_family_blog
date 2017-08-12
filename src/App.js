import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import Sidebar from './containers/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        {/* <Header />
        <HomePage /> */}
        <Sidebar />

      </div>
    );
  }
}

export default App;
