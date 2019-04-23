import React, {Component} from 'react';
import {TabBar, NavBar, Icon, Grid} from "antd-mobile";
import styles from "./MainManagerPage.css";
import {withRouter} from "react-router-dom";

const platformFunctions = [{icon:'',text:''},{icon:'',text:''}];
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
                        data={}
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
