import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Icon, Popconfirm } from "antd";
import { getProducers } from "../../../_actions/producer.action";
import moment from "moment";

@connect(store => {
  return {
    producers: store.producers
  };
})
class ProducersView extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: []
  };

  componentDidMount() {
    this.props.dispatch(getProducers()).then(response => {
      this.setState({
        data: Object.values(response.value.data)
      });
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
    // ## handle delete producer operation
  };

  render() {
    // let { sortedInfo, filteredInfo, data } = this.state;
    let { data } = this.state;
    // sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
        // ## filters: bureau
      },
      {
        title: "Producer ID",
        dataIndex: "producerId",
        key: "producerId"
      },
      {
        title: "BU Name",
        dataIndex: "buName",
        key: "buName"
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "Topic",
        dataIndex: "topic",
        key: "topic"
      },
      {
        title: "Purpose",
        dataIndex: "purpose",
        key: "purpose"
      },
      {
        title: "Metadata",
        dataIndex: "metadata",
        key: "metadata"
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (text, record) => {
          return moment(record.createdAt, "x").format("DD/MM/YYYY hh:mm A");
        }
      },
      {
        title: "Updated At",
        dataIndex: "updatedAt",
        key: "updatedAt",
        render: (text, record) => {
          return moment(record.updatedAt, "x").format("DD/MM/YYYY hh:mm A");
        }
      },
      {
        title: "Created By",
        dataIndex: "createdBy",
        key: "createdBy",
        fixed: "right"
      }
    ];
    return (
      <Table
        rowKey="id"
        bordered
        // size="small"
        columns={columns}
        dataSource={data}
        onChange={this.handleChange}
        scroll={{ x: "max-content" }}
      />
    );
  }
}

export default ProducersView;
