import React, {Component} from 'react';
import {NavBar, Icon, InputItem, ImagePicker, WhiteSpace, WingBlank} from "antd-mobile";
import {withRouter} from "react-router-dom";
import styles from "./CompanyInfoPage.css"


class CompanyInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            companyNum: '',
            legalPersonal: '',
            address: '',
            contact: '',
            contactPos: '',
            qualificationFiles: [],
            multiple: true,
        }
    }

    render() {
        const {qualificationFiles} = this.state;
        return (
            <div>
                <NavBar
                    leftContent={
                        <Icon key="0" color="#FFFFFF" type="left" onClick={() => {
                            this.props.history.goBack();
                        }
                        }/>
                    }

                    rightContent={
                        <p className="navbar_function" onClick={() => {
                            this.props.history.push("/Register/CompanyAccount")
                        }
                        }>
                            下一步
                        </p>
                    }
                >
                    企业信息
                </NavBar>

                <InputItem
                    value={this.state.companyName}
                    onChange={(value) => {
                        this.setState({
                            companyName: value,
                        })
                    }}
                >
                    组织机构名称
                </InputItem>

                <InputItem
                    value={this.state.companyNum}
                    onChange={(value) => {
                        this.setState({
                            companyNum: value,
                        })
                    }}
                >
                    组织机构代码
                </InputItem>

                <InputItem
                    value={this.state.legalPersonal}
                    onChange={(value) => {
                        this.setState({
                            legalPersonal: value,
                        })
                    }}
                >
                    法定代表人
                </InputItem>

                <InputItem
                    value={this.state.address}
                    onChange={(value) => {
                        this.setState({
                            address: value,
                        })
                    }}
                >
                    组织机构地址
                </InputItem>

                <InputItem
                    value={this.state.contact}
                    onChange={(value) => {
                        this.setState({
                            contact: value,
                        })
                    }}
                >
                    联系人
                </InputItem>

                <InputItem
                    value={this.state.contactPos}
                    onChange={(value) => {
                        this.setState({
                            contactPos: value,
                        })
                    }}
                >
                    联系人职位
                </InputItem>
                <div className="label_default">
                    相关资质上传
                </div>
                <ImagePicker
                    files={qualificationFiles}
                    onChange={this.onChange}
                    selectable={qualificationFiles.length < 7}
                    multiple={this.state.multiline}
                ></ImagePicker>

            </div>


        );
    }

    onChange = (files, type, index) => {
        console.log(files);
        this.setState({
            qualificationFiles: files,
        })
    }
}

export default withRouter(CompanyInfoPage);
