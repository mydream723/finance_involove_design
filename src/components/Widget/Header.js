import React from "react";
import {NavBar, Icon} from "antd-mobile";
import creatHistory from 'history/createHashHistory';
import PropTypes from 'prop-types';
const history = creatHistory();




class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let headerShow;
        if (this.props.hasBack) {
            headerShow = (
                <NavBar
                    leftContent={
                        [
                            <Icon type="left" key="0" size="sm" color="#FFF" onClick={() => {
                                history.goBack();
                            }}/>
                        ]
                    }
                >
                    {this.props.title}
                </NavBar>
            );
        } else {
            headerShow = (
                <NavBar
                >
                    {this.props.title}
                </NavBar>
            );
        }

        return (
            <div>
                {headerShow}
            </div>
        );
    }

}
Header.propTypes = {
    title: PropTypes.string,
    hasBack:PropTypes.bool,
};

Header.defaultProps = {
    hasBack: true,
};



export default Header;
