import React from "react";
import {NavBar, Icon, InputItem, Picker, List, Flex, Radio} from "antd-mobile";
import {withRouter} from "react-router-dom"
import sytles from "./PersonalInfoPage.css"

const RadioItem = Radio.RadioItem;
const genderSelection = [{
    value: 0,
    label: (
        <div>
            <span className="font_radio">男</span>
        </div>
    )
}, {
    value: 1,
    label: (
        <div>
            <span className="font_radio">女</span>
        </div>
    )
}
];

class PersonalInfoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar
                    leftContent={[
                        <Icon key="0" type="left" color="#FFFFFF" onClick={() => {
                            this.props.history.goBack();
                        }}/>

                    ]}
                    rightContent={[
                        <p className="navbar_function" onClick={() => {
                            this.props.history.push("");
                        }}>下一步</p>
                    ]}
                >
                    个人信息填报
                </NavBar>

                <InputItem>姓名</InputItem>
                <Picker data={genderSelection}>
                    <List.Item arrow="horizontal">
                        性别
                    </List.Item>
                </Picker>
                <InputItem >民族</InputItem>
                <InputItem type="">身份证号</InputItem>
                <InputItem>家庭地址</InputItem>

            </div>
        );
    }
}

export default withRouter(PersonalInfoPage);
