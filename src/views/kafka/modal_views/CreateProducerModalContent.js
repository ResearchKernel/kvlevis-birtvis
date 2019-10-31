import React from "react";
import { Input } from "antd";

class CreateProducerModalContent extends React.Component {
  state = {
    producerRecord = {
      
    }
  }
  handleChange = () => {

  }
  render() {
    return (
      <>
        <Input
          placeholder="Enter topic name here"
          type="text"
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default CreateProducerModalContent;
