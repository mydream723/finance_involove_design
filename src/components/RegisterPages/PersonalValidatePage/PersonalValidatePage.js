import React from "react";
import {WhiteSpace, Icon, InputItem, NavBar} from "antd-mobile";
import {withRouter} from "react-router-dom"
import TelPhoneValidate from "../../Widget/TelPhoneValidate/TelPhoneValidate";
import styles from "./PersonalValidatePage.css"

class PersonalValidatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            telPhone: '',
            validateNum: '',
        };
    }

    render() {
        return (
            <div>
                <NavBar
                    leftContent={[
                        <Icon key="0" size="sm" type="left" color="#FFF" onClick={() => {
                            this.props.history.goBack();
                        }}/>

                    ]}
                    rightContent={[
                        <p className="navbar_function" onClick={() => {
                            this.props.history.push("/Register/PersonalInfo")
                        }}>下一步</p>
                    ]}
                >
                    手机验证
                </NavBar>

                <TelPhoneValidate
                    value={this.state.telPhone}
                    onChange={(value) => {
                        this.setState({
                            telPhone: value,
                        })
                    }}
                />
                <WhiteSpace size="xs"/>
                <InputItem
                    type="number"
                    placeholder="请输入接收到的验证码"
                    value={this.state.validateNum}
                    onChange={(value) => {
                        this.setState({
                            validateNum: value,
                        })
                    }}
                >
                    验证码
                </InputItem>

                <WhiteSpace size="lg"/>
            </div>
        );
    }
}

export default withRouter(PersonalValidatePage);
