import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from './Home'
import NoMatch from './NoMatch'
import Login from './Login'
import './App.css';

function App() {
    return (
        <Router basename="/echo">
            <div className="entryWrap">
                <Switch>
                    <Route path="/login" component={Login} exact/>
                    <PrivateRoute path="/" component={Home} exact/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
