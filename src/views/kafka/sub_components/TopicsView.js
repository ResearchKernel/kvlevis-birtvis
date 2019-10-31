import React from "react";
import { connect } from "react-redux";
import {
  Icon,
  Table,
  Input,
  Button,
  Popconfirm,
  Form,
  Modal,
  message
} from "antd";
import CreateTopicModalContent from "../modal_views/CreateTopicModalContent";
import { describeTopics, createTopics } from "../../../_actions/topics.action";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

@connect(store => {
  return {
    topics: store.topics
  };
})
class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Topic Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
        editable: false
        // ## filters: bureau
      },
      {
        title: "Partitions",
        dataIndex: "partition",
        key: "partition",
        editable: true,
        render: (text, record) => {
          return record.partitions.length;
        }
      },
      {
        title: "Delete",
        key: "delete",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
              onConfirm={() => this.handleDelete(record)}
            >
              <Icon type="delete" style={{ color: "red", cursor: "pointer" }} />
            </Popconfirm>
          ) : null
      }
    ];

    // ## call data
    this.state = {
      dataSource: [],
      count: 0,
      visible: false,
      confirmLoading: false,
      topicValue: null
    };
  }

  async componentDidMount() {
    await this.callToTopics();
  }

  callToTopics() {
    return new Promise((resolve, reject) => {
      this.props
        .dispatch(describeTopics())
        .then(response => {
          const data = Object.values(response.value.data);
          this.setState(
            {
              dataSource: data,
              count: data.length
            },
            () => {
              resolve(data);
            }
          );
        })
        .catch(error => {
          message.error(`Fetch call to topics failed.`);
          reject(error);
        });
    });
  }

  handleDelete = record => {
    const dataSource = [...this.state.dataSource];
    // ## handle delete
    this.setState(
      {
        dataSource: dataSource.filter(item => item.name !== record.name)
      },
      () => message.success(`Topic - ${record.name} deleted successfully`)
    );
  };

  handleAdd = () => {
    const { count, dataSource, topicValue } = this.state;
    // ## retrieve data from modal
    this.setState({ visible: false });
    const newData = [topicValue];
    // ## call to api
    this.props.dispatch(createTopics(newData)).then(response => {
      this.callToTopics().then(() =>
        message.success(`Topic - ${topicValue} created successfully`)
      );
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];

    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData }, () => {
      console.log(row);
    });
  };

  handleModalOk = () => {
    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 400);
    this.handleAdd();
  };

  handleModalCancel = () => {
    this.setState({
      visible: false
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOnChangeModal = e => {
    const { value } = e.target;
    this.setState({ topicValue: value });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          name: col.name,
          key: col.name,
          handleSave: this.handleSave
        })
      };
    });

    return (
      <>
        <Button
          onClick={this.showModal}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Add Topic
        </Button>
        <Table
          components={components}
          rowKey="name"
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleModalOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleModalCancel}
        >
          <CreateTopicModalContent onChange={this.handleOnChangeModal} />
        </Modal>
      </>
    );
  }
}

export default EditableTable;
