import React from "react";
import {NavBar, Icon, InputItem, Picker, List, Flex, Radio, ImagePicker, WhiteSpace} from "antd-mobile";
import {withRouter} from "react-router-dom";
import {createForm} from 'rc-form';
import sytles from "./PersonalInfoPage.css"

const RadioItem = Radio.RadioItem;
const genderSelection = [{
    value: 0,
    label: (
        <div className="font_radio">
            男
        </div>
    )
}, {
    value: 1,
    label: (
        <div className="font_radio">
            女
        </div>
    )
}
];

class PersonalInfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            realName: '',
            gender: '',
            nation: '',
            identifyCard: '',
            address: '',
            sourceFiles: [],
            sourceMultiple: true,
        };
    }

    render() {
        const {getFieldProps} = this.props.form;
        const {sourceFiles} = this.state;
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
                            this.props.history.push("/Register/PersonalPassword");
                        }}>下一步</p>
                    ]}
                >
                    个人信息填报
                </NavBar>

                <InputItem
                    value={this.state.realName}
                    onChange={(value) => {
                        this.setState({
                            realName: value,
                        })
                    }}
                    type="text"
                >姓名</InputItem>
                <Picker data={genderSelection}

                        cols={1}
                        {...getFieldProps('gender')}>
                    <List.Item arrow="horizontal">
                        性别
                    </List.Item>
                </Picker>
                <WhiteSpace size="xs"/>
                <InputItem
                    value={this.state.nation}
                    onChange={(value) => {
                        this.setState({
                            nation: value,
                        })
                    }}
                >民族</InputItem>
                <InputItem
                    value={this.state.identifyCard}
                    onChange={(value) => {
                        this.setState({
                            identifyCard: value,
                        })
                    }}
                >身份证号</InputItem>
                <InputItem
                    value={this.state.address}
                    onChange={(value) => {
                        this.setState({
                            address: value,
                        })
                    }}
                >家庭地址</InputItem>
                <ImagePicker
                    files={sourceFiles}
                    onChange={this.onChange}
                    selectable={sourceFiles.length < 7}
                    multiple={this.state.multiline}
                >

                </ImagePicker>
            </div>
        );
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            sourceFiles: files,
        });
    }
}

export default withRouter(new createForm()(PersonalInfoPage));
