import React, {Component} from 'react';
import {Redirect, BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import LoginPage from './components/LoginPages/LoginPage'
import UserTypePage from './components/RegisterPages/UserTypePage/UserTypePage'
import PersonalValidatePage from './components/RegisterPages/PersonalValidatePage/PersonalValidatePage'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={LoginPage}/>
                {/*注册用户-选择注册用户类别*/}
                <Route path="/Register/UserType" component={UserTypePage}/>
                {/*个人注册-手机号验证*/}
                <Route path="/Register/PersonalValidate" component={PersonalValidatePage}/>
            </Router>

        );
    }
}

export default App;
