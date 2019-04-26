import React, {Component} from 'react';
import Header from "../../../Widget/Header"
import {Button, InputItem, TextareaItem, Modal, Toast} from "antd-mobile";
import {withRouter} from "react-router-dom";
import styles from "./FinancialManageEditorPage.css"

class FinancialManageEditorPage extends Component {
    static defaultProps = {
        number: '暂无信息',
        name: '暂无信息',
        type: '暂无信息',
        brand: '暂无信息',
        model: '暂无信息',
        price: '暂无信息',
        belongUnit: '暂无信息',
        caseSource: '暂无信息',
        remark: '暂无信息',
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 'No.10011',
            name: '笔记本电脑',
            type: '电子通讯',
            brand: '戴尔',
            model: '灵越R15-5200',
            price: '￥4000',
            belongUnit: '河西分局',
            caseSource: '密室盗窃案件',
            remark: '案件已侦破。',
        };
    }

    render() {
        return (
            <div className="container">
                <Header title="编辑财物"/>

                <InputItem
                    value={this.state.number}
                    onChange={(value) => {
                        this.setState({
                            number: value,
                        })
                    }}
                >财物编号</InputItem>
                <InputItem
                    value={this.state.name}
                    onChange={(value) => {
                        this.setState({
                            name: value,
                        })
                    }}
                >财物名称</InputItem>

                <InputItem
                    value={this.state.type}
                    onChange={(value) => {
                        this.setState({
                            type: value,
                        })
                    }}
                >财物类型</InputItem>

                <InputItem
                    value={this.state.brand}
                    onChange={(value) => {
                        this.setState({
                            brand: value,
                        })
                    }}
                >财物品牌</InputItem>

                <InputItem
                    value={this.state.model}
                    onChange={(value) => {
                        this.setState({
                            model: value,
                        })
                    }}
                >财物型号</InputItem>

                <InputItem
                    value={this.state.price}
                    onChange={(value) => {
                        this.setState({
                            price: value,
                        })
                    }}
                >预估价值</InputItem>

                <InputItem
                    value={this.state.belongUnit}
                    onChange={(value) => {
                        this.setState({
                            belongUnit: value,
                        })
                    }}
                >所属单位</InputItem>

                <InputItem
                    value={this.state.caseSource}
                    onChange={(value) => {
                        this.setState({
                            caseSource: value,
                        })
                    }}
                >所属案件</InputItem>
                <TextareaItem
                    title="备注"
                    value={this.state.remark}
                    onChange={(value) => {
                        this.setState({
                            remark: value,
                        })
                    }}
                    rows={5}
                    count={100}
                />

                <Button type="primary" className="button" onClick={() => {

                    Modal.alert('注意', '确定要修改该内容吗？', [
                        {
                            text: '暂不修改', onPress: () => {

                            }
                        },
                        {
                            text: '确定修改', onPress: () => {
                                this.props.history.push("/Business/Manager/financialDetail");
                                Toast.info("修改成功");
                            }
                        }
                    ])
                }}>确认修改</Button>
            </div>
        );
    }
}

export default FinancialManageEditorPage;
