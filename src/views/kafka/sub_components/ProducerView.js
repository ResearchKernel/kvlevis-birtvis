import React from "react";
import { connect } from "react-redux";
import { Table, Input, InputNumber, Popconfirm, Form, Icon } from "antd";
import moment from "moment";
import { getProducers } from "../../../_actions/producer.action";

const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`
//   });
// }
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

@connect(store => {
  return {
    producers: store.producers
  };
})
class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: "" };
    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
        // ## filters: bureau
      },
      {
        title: "Producer ID",
        dataIndex: "producerId",
        key: "producerId",
        editable: true
      },
      {
        title: "BU Name",
        dataIndex: "buName",
        key: "buName",
        editable: true
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        editable: true
      },
      {
        title: "Topic",
        dataIndex: "topic",
        key: "topic",
        editable: true
      },
      {
        title: "Purpose",
        dataIndex: "purpose",
        key: "purpose",
        editable: true
      },
      {
        title: "Metadata",
        dataIndex: "metadata",
        key: "metadata",
        editable: true
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        editable: false,
        render: (text, record) => {
          return moment(record.createdAt, "x").format("DD/MM/YYYY hh:mm A");
        }
      },
      {
        title: "Updated At",
        dataIndex: "updatedAt",
        key: "updatedAt",
        editable: false,
        render: (text, record) => {
          return moment(record.updatedAt, "x").format("DD/MM/YYYY hh:mm A");
        }
      },
      {
        title: "Created By",
        dataIndex: "createdBy",
        key: "createdBy",
        fixed: "right",
        editable: true
      },
      {
        title: "Edit",
        dataIndex: "operation",
        fixed: "right",
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <Icon
                    onClick={() => this.save(form, record.id)}
                    style={{ marginRight: 8, color: "green" }}
                    type="save"
                  />
                )}
              </EditableContext.Consumer>
              <Popconfirm
                icon={
                  <Icon type="question-circle-o" style={{ color: "red" }} />
                }
                title="Sure to cancel?"
                onConfirm={() => this.cancel(record.key)}
              >
                <Icon
                  style={{ marginRight: 8, color: "red", cursor: "pointer" }}
                  type="close-circle"
                />
              </Popconfirm>
            </span>
          ) : (
            <Icon
              onClick={() => this.edit(record.id)}
              disabled={editingKey !== ""}
              style={{ marginRight: 8, color: "#1890ff" }}
              type="edit"
            />
          );
        }
      }
    ];
  }

  componentDidMount() {
    this.props.dispatch(getProducers()).then(response => {
      this.setState({
        data: Object.values(response.value.data)
      });
    });
  }

  isEditing = record => {
    // console.log(this.state);
    return record.id === this.state.editingKey;
  };

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  save(form, id) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: "" });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
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
          inputType: "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          rowKey="id"
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel
          }}
          scroll={{ x: "max-content" }}
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;
