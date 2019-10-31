import React from "react";
import { Input } from "antd";

class CreateTopicModalContent extends React.Component {
  render() {
    return (
      <Input
        placeholder="Enter topic name here"
        type="text"
        onChange={this.props.onChange}
      />
    );
  }
}

export default CreateTopicModalContent;
