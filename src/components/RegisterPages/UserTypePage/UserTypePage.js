import React from 'react';
import {NavBar, Icon, WhiteSpace, WingBlank, List, Toast} from "antd-mobile";
import Header from "../../Widget/Header"

import {withRouter} from "react-router-dom"

const Item = List.Item;
const Brief = Item.Brief;
class UserTypePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title="用户类别选择" />
                {/*<NavBar*/}
                    {/*leftContent={[*/}
                        {/*<Icon key="0" type="left" size="sm" color="#FFF" onClick={() => {*/}
                            {/*this.props.history.goBack();*/}
                        {/*}}/>*/}
                    {/*]}*/}
                {/*>*/}
                    {/*用户类别选择*/}
                {/*</NavBar>*/}
                <div>
                    <List renderHeader={() => '请选择用户类型'} className="list_selection">
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={()=>{
                                this.props.history.push("/Register/PersonalValidate")
                            }}

                        >
                            个人用户<Brief>普通个人用户</Brief>
                        </Item>

                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={()=>{}}

                        >
                            企业用户<Brief>第三方企业用户注册</Brief>
                        </Item>
                    </List>
                </div>
            </div>
        );
    }

}

export default withRouter(UserTypePage)

