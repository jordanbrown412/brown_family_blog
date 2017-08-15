import React, { Component } from 'react';
import Header from './components/Header';
import Main from './containers/Main';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        
        <div>
      <Header/>
      <Main />
      </div>
     </Router>
    );
  }
}

export default App;
