import React, {Component} from 'react';
import {Button, Carousel, WhiteSpace} from "antd-mobile";
import Header from "../../../Widget/Header";

import {withRouter} from "react-router-dom";
import styles from "./FinancialManageDetailPage.css"
import WingBlank from "antd-mobile/lib/wing-blank";

class FinancialManageDetailPage extends Component {
    static defaultProps = {
        number: 'No.10012',
        name: '笔记本电脑',
        type: '电子通讯',
        brand: '戴尔',
        model: '灵越R15-3900',
        price: '￥4000',
        unit: '河西分局',
        caseSource: '密室盗窃事件',
        remark: '真相只有一个 ',
    }

    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
            });
        }, 100);
    }

    render() {
        return (
            <div className="container">
                <Header title="财务详情"/>
                <Carousel
                    autoplay={false}
                    beforeChange={(from, to) => console.log('slide from ${from} to ${to}')}
                    afterChange={index => console.log('slide to ', index)}

                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{width: '100%', verticalAlign: 'top'}}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({imgHeight: 'auto'});
                                }}
                            />
                        </a>
                    ))}
                </Carousel>


                <div className="content_container">
                    <div className="label_space">
                        <p className="label_content">财物编号：</p><p className="label_content">{this.props.number}</p>
                    </div>

                    <div className="label_space">
                        <p className="label_content">财物名称：</p><p className="label_content">{this.props.name}</p>
                    </div>

                    <div className="label_space">
                        <p className="label_content">财物类型：</p><p className="label_content">{this.props.type}</p>
                    </div>

                    <div className="label_space">
                        <p className="label_content">财物品牌：</p><p className="label_content">{this.props.brand}</p>
                    </div>

                    <div className="label_space">
                        <p className="label_content">财物型号：</p><p className="label_content">{this.props.model}</p>
                    </div>


                    <div className="label_space">
                        <p className="label_content">预期价值：</p><p className="label_content">{this.props.price}</p>
                    </div>

                    <div className="label_space">
                        <p className="label_content">所属单位：</p><p className="label_content">{this.props.unit}</p>
                    </div>

                    <div className="label_space">
                        <p className="label_content">所属案件：</p><p className="label_content">{this.props.caseSource}</p>
                    </div>

                    <div className="label_space">
                        <p className="label_content">备注：</p><p className="label_content">{this.props.remark}</p>
                    </div>


                </div>
                <Button
                    type="primary"
                    className="button"
                    onClick={() => {
                        this.props.history.push("/Business/Manager/financialEditor");
                    }}
                >编辑详情</Button>
            </div>
        );
    }
}

export default withRouter(FinancialManageDetailPage);
