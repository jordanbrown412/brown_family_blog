import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path='/' component={FamilyCard} />
                    <Route exact={true} path='/cms' component={CmsRouter} />
                    <Route exact={true} path='/blog' component={BlogRouter} />
                    <Route exact={true} path='/news' component={News} />
                </Switch> 
            </Router>
        );
    }
}
