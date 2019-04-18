import React from "react";
import {WingBlank, WhiteSpace, Icon, InputItem} from "antd-mobile";
import Header from "../../Widget/Header"
import {withRouter} from "react-router-dom"
import TelPhoneValidate from "../../Widget/TelPhoneValidate/TelPhoneValidate";


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
                <Header title="手机验证"/>
                <TelPhoneValidate/>
                <WhiteSpace size="lg"/>
                <InputItem
                    type="phone"
                    placeholder="请输入手机号"
                    value={this.state.telPhone}
                    onChange={(value) => {
                        this.setState({
                            telPhone: value,
                        })
                    }}
                >
                    手机号
                </InputItem>
            </div>
        );
    }
}

export default withRouter(PersonalValidatePage);
