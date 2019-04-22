import React, {Component} from 'react';
import {NavBar, Icon, InputItem, Toast} from "antd-mobile";
import {withRouter} from "react-router-dom";
import styles from "./CompanyAccountPage.css"

class CompanyAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
        };
    }

    render() {
        return (
            <div>
                <NavBar
                    leftContent={
                        <Icon key="0" type="left" color="#FFFFFF" onClick={() => {
                            this.props.history.goBack();
                        }
                        }/>
                    }

                    rightContent={
                        <p className="navbar_function" onClick={() => {
                            Toast.info("已成功提交审核，等待审核结果。")
                            this.props.history.push("/");
                        }
                        }>提交审核</p>
                    }
                >
                    用户名与密码
                </NavBar>

                <InputItem
                    value={this.state.username}
                    onChange={(value) => {
                        this.setState({
                            username: value,
                        })
                    }}
                >
                    用户名
                </InputItem>


                <InputItem
                    value={this.state.password}
                    onChange={(value) => {
                        this.setState({
                            password: value,
                        })
                    }}
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
                >
                    重复密码
                </InputItem>
            </div>
        );
    }
}

export default withRouter(CompanyAccountPage);
