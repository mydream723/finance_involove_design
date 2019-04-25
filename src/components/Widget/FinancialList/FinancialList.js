import React, {Component} from 'react';
import {ListView} from "antd-mobile";
import FinancialItem from "../FinancialItem/FinancialItem";

const dataItem = {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    name: "笔记本电脑",
    type: "电子",
    number: "No.12010001",

};

const data = [];
for (let i = 1; i < 100; i++) {
    dataItem.key = i;
    data.push(dataItem);
}

class FinancialList extends Component {


    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2

        });
        this.state = {
            dataSource: dataSource.cloneWithRows({}),
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            isLoading: false,
        })
    }


    onLoadMore = (page, lastPage) => {

    }

    onRefresh = () => {
        this.setState({
            pullLoading: true,
        })
    }

    renderRow = (dataRow) => {
        return (
            <div>
                <FinancialItem financialName={dataRow.name}/>
            </div>
        );
    }

    render() {
        const {list, dataSource, upLoading, pullLoading} = this.state;
        return (
            <div>
                <ListView
                    style={{
                        height: document.documentElement.clientHeight,
                        overflow: 'auto',
                    }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    pageSize={10}
                />
            </div>
        );
    }
}

export default FinancialList;
