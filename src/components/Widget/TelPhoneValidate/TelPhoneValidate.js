import React from "react";
import {WhiteSpace, Flex, InputItem, Toast} from "antd-mobile";
import WingBlank from "antd-mobile/lib/wing-blank";
import styles from "./TelPhoneValidate.css"
import {withRouter} from "react-router-dom"

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
        let timeListener = this.state.second;
        let clockFlag;

        //关键在于用ti取代time进行计算和判断，因为time在render里不断刷新，但在方法中不会进行刷新
        const timeClock = () => {
            console.log("timeClock");
            if (timeListener > 0) {
                //当ti>0时执行更新方法
                timeListener--;
                this.setState({
                    second: timeListener,
                    isSend: true,
                });
            } else {
                //当ti=0时执行终止循环方法
                clearInterval(clockFlag);
                this.setState({
                    second: timerSecond,
                    isSend: false,
                });
            }
        };

        /*读秒控件*/
        let secondLabel;
        if (this.state.isSend) {
            secondLabel = (
                <div className="click">{this.state.second}(s)后重发</div>
            );
        } else {
            secondLabel = (
                <div className="click" onClick={() => {
                    if (!this.state.isSend) {
                        // this.setState({isSend: true});
                        console.log("click");
                        clockFlag = setInterval(timeClock, 1000);
                    }
                }}>点击发送</div>
            );
        }

        /**
         * 手机验证
         * @param value
         * @returns {boolean}
         */
        // function isPoneAvailable(value) {
        //     var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        //     if (!myreg.test(value)) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // }

        return (
            <div className="input_container">
                <div className="label">手机号</div>
                <div className="content">
                    <input className="input"
                           value={this.state.telPhone}
                           placeholder="请输入手机号"
                           onChange={(event) => {
                               this.setState({telPhone: event.target.value == null ? "" : event.target.value})
                           }}
                           type="tel"
                           maxLength="11"
                    ></input>
                    {secondLabel}
                </div>
            </div>
        );


    }

}

export default withRouter(TelPhoneValidate);
