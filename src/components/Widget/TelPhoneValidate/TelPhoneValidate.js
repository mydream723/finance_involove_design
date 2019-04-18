import React from "react";
import {WhiteSpace, Flex, InputItem, Toast} from "antd-mobile";
import WingBlank from "antd-mobile/lib/wing-blank";
import styles from "./TelPhoneValidate.css"

const timerSecond = 60;


class TelPhoneValidate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            value: '',
            second: timerSecond,
            isSend: false,
        };
    }

    render() {
        let timeChange;
        let ti = this.state.time;

        let secondLabel;
        if (this.state.isSend) {
            secondLabel = (
                <div className="click">{this.state.second}(s)后重发</div>
            );
        } else {
            secondLabel = (
                <div className="click" onClick={this.timerOnClick}>点击发送</div>
            );
        }

        return (
            <div className="input_container">
                <div className="label">手机号</div>
                <div className="content">
                    <input className="input"
                           value={this.state.telPhone}
                           placeholder="请输入手机号"
                           onChange={(event) => {
                               this.setState({telPhone: event.target.value == null ? "" : event.target.value})
                           }}></input>
                    {secondLabel}
                </div>
            </div>
        );


        const timerOnClick = (event) => {
            if (!this.state.isSend) {
                this.setState({isSend: true})
                timeChange = setInterval(clock, 1000);
            }
        }


        //关键在于用ti取代time进行计算和判断，因为time在render里不断刷新，但在方法中不会进行刷新
        const clock = () => {
            if (ti > 0) {
                //当ti>0时执行更新方法
                ti = ti - 1;
                this.setState({
                    second: ti,
                    isSend: true,
                });
            } else {
                //当ti=0时执行终止循环方法
                clearInterval(timeChange);
                this.setState({
                    second: timerSecond,
                    isSend: false,
                });
            }
        };

    }


}

export default TelPhoneValidate;
