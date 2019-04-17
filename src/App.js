import React, {Component} from 'react';
import {Redirect, BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import LoginPage from './components/LoginPages/LoginPage'
import RegisterPage from './components/RegisterPages/RegisterPage'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/Register" component={RegisterPage}/>
            </Router>

        );
    }
}

export default App;
