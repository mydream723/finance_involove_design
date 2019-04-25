import React, {Component} from 'react';
import {NavBar, Icon, SearchBar} from "antd-mobile";
import Header from "../../../Widget/Header"
import {withRouter} from "react-router-dom";
import FinancialItem from "../../../Widget/FinancialItem/FinancialItem"
import styles from "./FinancialManagePage.css"
import ListView from "antd-mobile/lib/list-view";
import FinancialList from "../../../Widget/FinancialList/FinancialList";

class FinancialManagePage extends Component {
    render() {
        return (
            <div>
                <Header title="财物管理"/>

                <SearchBar
                    placeholder="请输入财物名称、编号"
                ></SearchBar>
                <FinancialList/>

            </div>
        );
    }
}

export default withRouter(FinancialManagePage);
