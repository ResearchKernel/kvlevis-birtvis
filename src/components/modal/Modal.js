import React from "react";
import { Modal, Button } from "antd";

class Modal extends React.Component {
  state = {
    ModalText: "Create Topic",
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    // setTimeout(() => {
    //   this.setState({
    //     visible: false,
    //     confirmLoading: false
    //   });
    // }, 2000);
    // ## this.props.callbackFn()
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const { title } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with async logic
        </Button>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default Modal;
