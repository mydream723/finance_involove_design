import React, {Component} from 'react';
import {InputItem, NavBar, Icon, Toast} from "antd-mobile";
import {withRouter} from 'react-router-dom'

class PersonalPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            repeatPassword: "",
        }
    }

    render() {
        return (
            <div>
                <NavBar
                    leftContent={
                        <Icon type="left" key="0" color="#FFFFFF" onClick={() => {
                            this.props.history.goBack();
                        }}/>
                    }
                    rightContent={
                        <p className="navbar_function" onClick={() => {
                            Toast.info("注册成功");
                            this.props.history.push("/");
                        }}>完成注册</p>
                    }
                >
                    设置密码
                </NavBar>
                <InputItem
                    value={this.state.password}
                    onChange={(value) => {
                        this.setState({
                            password: value,
                        })
                    }}
                    type="password"
                >
                    密码
                </InputItem>
                <InputItem
                    value={this.state.repeatPassword}
                    onChange={(value) => {
                        this.setState({
                            repeatPassword: value,
                        })
                    }}
                    type="password"
                >
                    重复密码
                </InputItem>
            </div>
        );
    }
}

export default withRouter(PersonalPasswordPage);
