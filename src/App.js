import React, {Component} from 'react';
import {Redirect, BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import LoginPage from './components/LoginPages/LoginPage'
import UserTypePage from './components/RegisterPages/UserTypePage/UserTypePage'
import PersonalValidatePage from './components/RegisterPages/PersonalValidatePage/PersonalValidatePage'
import PersonalInfoPage from "./components/RegisterPages/PersonalInfoPage/PersonalInfoPage"
import PersonalPasswordPage from "./components/RegisterPages/PersonalPasswordPage/PersonalPasswordPage"
import CompanyContactPage from "./components/RegisterPages/CompanyContactPage/CompanyContactPage"
import CompanyInfoPage from "./components/RegisterPages/CompanyInfoPage/CompanyInfoPage"
import CompanyAccountPage from "./components/RegisterPages/CompanyAccountPage/CompanyAccountPage"
import MainManagerPage from "./components/BusinessPages/ManagerPages/MainManagerPage/MainManagerPage"
import FinancialManagePage from "./components/BusinessPages/ManagerPages/FinancialManagePage/FinancialManagePage"
import FinancialManageDetailPage
    from "./components/BusinessPages/ManagerPages/FinancialManagerDetailPage/FinancialManageDetailPage";
import FinancialManageEditorPage
    from "./components/BusinessPages/ManagerPages/FinancialManageEditorPage/FinancialManageEditorPage";
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
                {/*个人注册-信息填入*/}
                <Route path="/Register/PersonalInfo" component={PersonalInfoPage}/>
                {/*个人注册-密码重复*/}
                <Route path="/Register/PersonalPassword" component={PersonalPasswordPage}/>
                {/*企业注册-联系人*/}
                <Route path="/Register/CompanyContact" component={CompanyContactPage}/>
                {/*企业注册-企业信息*/}
                <Route path="/Register/CompanyInfo" component={CompanyInfoPage}/>
                {/*企业注册-用户名与密码*/}
                <Route path='/Register/CompanyAccount' component={CompanyAccountPage}/>
                {/*管理用户-首页*/}
                <Route path='/Business/Manager/Main' component={MainManagerPage}/>
                {/*管理用户-涉案财物管理列表*/}
                <Route path='/Business/Manager/financialManage' component={FinancialManagePage}/>
                {/*管理用户-涉案财物管理详情*/}
                <Route path='/Business/Manager/financialDetail' component={FinancialManageDetailPage}/>
                {/*管理用户-涉案财物管理编辑*/}
                <Route path='/Business/Manager/financialEditor' component={FinancialManageEditorPage}/>
            </Router>

        );
    }
}

export default App;
