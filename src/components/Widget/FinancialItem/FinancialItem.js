import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import styles from "./FinancialItem.css"


function mapStateToProps(state) {
    return {};
}

class FinancialItem extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="item_container" onClick={() => {
                this.props.history.push("/Business/Manager/financialDetail");
            }}>
                <img className="item_img" src={this.props.financialImage}/>

                <div className="item_content">
                    <div className="item_line">
                        <p className="item_label">财务名称：</p><p className="item_label">{this.props.financialName}</p>
                    </div>
                    <div className="item_line">
                        <p className="item_label">财务编号：</p><p className="item_label">{this.props.financialNum}</p>
                    </div>
                    <div className="item_line">
                        <p className="item_label">财务类别：</p><p className="item_label">{this.props.financialType}</p>
                    </div>

                </div>
            </div>
        );
    }
}

FinancialItem.default = {
    financialImage: "",
    financialName: "",
    financialNum: "",
    financialType: "",
}

export default withRouter(FinancialItem);
