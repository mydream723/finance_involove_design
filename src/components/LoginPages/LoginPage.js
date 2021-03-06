import React from 'react';
import {Toast, Flex, WhiteSpace, WingBlank, Button, InputItem} from "antd-mobile";
import {Link} from "react-router-dom";
import styles from './LoginPage.css'
import Input from "antd-mobile/lib/input-item/Input";

const PlaceHolder = ({className = '', ...restProps}) => (
    <div className={'${className} placeholder'}{...restProps}>Block</div>
);


/**
 * 登录页面
 */
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="container">
                <div className="container_title">
                    <h1>涉案财务全流程</h1>
                </div>

                <div className="container_content">

                    <WingBlank size="lg">
                        <InputItem
                            clear="true"
                            placeholder="请输入"
                            onChange={(value) => {
                                this.setState({username: value})
                            }}

                            value={this.state.username}
                        >用户名</InputItem>
                    </WingBlank>
                    <WhiteSpace size="md"/>

                    <WingBlank size="lg">
                        <InputItem
                            clear="true"
                            placeholder="请输入"
                            type="password"
                            value={this.state.password}
                            onChange={(value) => {
                                this.setState({password: value})
                            }}
                        >密码</InputItem>
                    </WingBlank>
                    <WhiteSpace size="md"/>
                    {/*登录按键*/}
                    <WingBlank size="lg">
                        <Button type="primary" onClick={this.toLogin}>登录</Button>
                    </WingBlank>
                    <WhiteSpace size="md"/>
                    <Flex justify="end">
                        <WingBlank size="lg">
                            <Link to="/Register/UserType/">注册用户</Link>
                        </WingBlank>
                    </Flex>

                </div>

            </div>
        );


    }

    /**
     * 登录
     * @param username
     * @param password
     */
    toLogin = () => {
        const username = this.state.username;
        const password = this.state.password;
        if (username == "undefined" || username == null || username == "") {
            Toast.info("请输入用户名");
            return;
        }
        if (password == "undefined" || password == null || password == "") {
            Toast.info("请输入密码");
            return;
        }

        Toast.loading('正在登录', 2, () => {
            this.props.history.push("/Business/Manager/Main");
        }, true);
    }
}
