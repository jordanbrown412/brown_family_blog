import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FamilyCard from './Family';
// import CmsRouter from '../components/Cms';
import LoginForm from '../components/LoginForm';

class Main extends Component {
    render() {
        return (
              <div>
                  
                    <Route exact path='/' component={FamilyCard} />
                    <Route path='/login' component={LoginForm} />
                
              </div>  
        );
    }
}

export default Main;