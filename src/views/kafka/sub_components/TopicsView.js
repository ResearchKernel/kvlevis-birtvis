import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Icon, Popconfirm } from "antd";
import { describeTopics } from "../../../_actions/topics.action";

@connect(store => {
  return {
    topics: store.topics
  };
})
class TopicsView extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: []
  };

  componentDidMount() {
    this.props.dispatch(describeTopics()).then(response => {
      this.setState({ data: Object.values(response.value.data) });
    });
  }

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  handleDelete = e => {
    console.log(e);
    // ## handle delete topic operation
    // this.props.dispatch(deleteTopic());
  };

  render() {
    // let { sortedInfo, filteredInfo, data } = this.state;
    let { data } = this.state;
    // sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Topic Name",
        dataIndex: "name",
        key: "name"
        // ## filters: bureau
      },
      {
        title: "Partitions",
        dataIndex: "partition",
        key: "partition",
        render: (text, record) => {
          return record.partitions.length;
        }
      },
      {
        title: "Delete",
        key: "delete",
        render: (text, record) => {
          return (
            <Popconfirm
              title="Are you sure？"
              icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
              onConfirm={() => this.handleDelete(record)}
            >
              <Icon type="delete" style={{ color: "red", cursor: "pointer" }} />
            </Popconfirm>
          );
        }
      }
    ];
    return (
      <Table
        rowKey="name"
        bordered
        columns={columns}
        dataSource={data}
        onChange={this.handleChange}
      />
    );
  }
}

export default TopicsView;
