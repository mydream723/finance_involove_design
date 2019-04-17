import React from 'react';
import {NavBar,Icon,InputItem} from "antd-mobile";

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar
                    leftContent={[
                        <Icon key="0" type="left" size="sm" color="#FFF"/>
                    ]}
                >
                    用户注册
                </NavBar>
            </div>
        );
    }
}
