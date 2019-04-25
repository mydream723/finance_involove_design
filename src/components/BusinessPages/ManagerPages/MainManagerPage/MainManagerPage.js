import React, {Component} from 'react';
import {TabBar, NavBar, Icon, Grid, Toast} from "antd-mobile";
import styles from "./MainManagerPage.css";
import {withRouter} from "react-router-dom";

const platformFunctions = [
    {
        icon: require("../../../../static/images/ic_financial_manage.png"),
        text: '涉案财物管理'
    },
    {
        icon: require("../../../../static/images/ic_financial_found.png"),
        text: '涉案财物招领'
    }];

class MainManagerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "platformTab",
        };
    }

    renderContent(pageText) {
        let content;
        if (pageText == "platform") {
            content = (
                <div>
                    <NavBar>
                        工作台
                    </NavBar>

                    <Grid
                        data={platformFunctions}
                        columnNum={3}
                        onClick={(el, index) => {
                            if (index == 0) {
                                //财物管理
                                this.props.history.push("/Business/Manager/financialManage");
                            } else if (index == 1) {
                                //财物招领
                                Toast.info("财物招领");
                            }
                        }}
                    ></Grid>
                </div>
            );
        } else if (pageText == "mine") {
            content = (
                <div>
                    <NavBar>
                        我的
                    </NavBar>
                </div>
            );
        }
        return content;
    }


    render() {
        return (
            <div className="tab_container">
                <div></div>
                <TabBar
                    tabBarPosition="bottom"
                >
                    <TabBar.Item
                        title="工作台"
                        key="platform"
                        selected={this.state.selectedTab == "platformTab"}
                        icon={
                            <div
                                className="icon"
                                // style={{background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'}}
                                style={{background: `url(${require("../../../../static/images/ic_platform.png")}) center center / 21px 21px no-repeat`}}
                            />
                        }
                        selectedIcon={
                            <div
                                className="icon"
                                style={{background: `url(${require("../../../../static/images/ic_platform_pre.png")}) center center / 21px 21px no-repeat`}}
                            ></div>
                        }

                        onPress={() => {
                            this.setState({
                                selectedTab: 'platformTab',
                            })
                        }}
                    >
                        {this.renderContent("platform")}
                    </TabBar.Item>


                    <TabBar.Item
                        title="我的"
                        key="mine"
                        icon={
                            <div
                                className="icon"
                                // style={{background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'}}
                                style={{background: `url(${require("../../../../static/images/ic_mine.png")}) center center / 21px 21px no-repeat`}}
                            />
                        }
                        selectedIcon={
                            <div
                                className="icon"
                                style={{background: `url(${require("../../../../static/images/ic_mine_pre.png")}) center center / 21px 21px no-repeat`}}
                            ></div>
                        }
                        selected={this.state.selectedTab == "mineTab"}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'mineTab',
                            })
                        }}
                    >
                        {this.renderContent("mine")}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(MainManagerPage);
