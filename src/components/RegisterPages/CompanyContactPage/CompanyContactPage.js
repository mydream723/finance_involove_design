import React, {Component} from 'react';
import {NavBar, Icon, InputItem, Button, WhiteSpace, WingBlank} from "antd-mobile";
import {withRouter} from "react-router-dom";
import TelPhoneValidate from "../../Widget/TelPhoneValidate/TelPhoneValidate";
import styles from "./CompanyContactPage.css"

class CompanyContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telPhone: '',
            validateNum: '',
        }
    }

    render() {
        return (
            <div>
                <NavBar
                    leftContent={
                        <Icon type="left" key="0" color="#FFFFFF" onClick={() => {
                            this.props.history.goBack();
                        }
                        }/>
                    }

                    rightContent={
                        <p className="navbar_function" onClick={() => {
                            this.props.history.push("/Register/CompanyInfo");
                        }
                        }>跳过</p>
                    }
                >
                    企业联系人
                </NavBar>

                <TelPhoneValidate
                    value={this.state.telPhone}
                    onChange={(value) => {
                        this.setState({
                            telPhone: value,
                        })
                    }}
                />

                <InputItem
                    type="number"
                    value={this.state.validateNum}
                    onChange={(value) => {
                        this.setState({
                            validateNum: value,
                        })
                    }}
                    placeholder="请输入验证码"
                >
                    验证码
                </InputItem>
                <WhiteSpace size="lg"/>
                <WingBlank>

                    <Button
                        type="primary"
                        onClick={() => {
                            this.props.history.push("/Register/CompanyInfo");
                        }}
                    >
                        下一步
                    </Button>
                </WingBlank>
            </div>
        );
    }
}

export default withRouter(CompanyContactPage);
