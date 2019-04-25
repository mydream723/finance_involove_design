import React, {Component} from 'react';
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
            <div className="item_container">
                <img className="item_img" src={this.props.financialImage}/>

                <div className="item_content">
                    <p className="item_label">财务名称：</p><p className="item_label">{this.props.financialName}</p>
                    <p>财务编号：</p><p>{this.props.financialNum}</p>
                    <p>财务类别：</p><p>{this.props.financialType}</p>
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

export default FinancialItem;
