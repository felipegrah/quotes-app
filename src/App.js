import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';

import Quote from './components/Quote';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id" component={Quote} />
                </div>
            </Router>
        )
    }
}

export default App;