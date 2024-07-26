import React, { Component } from "react";
import Modal from "./Modal.jsx";
import { Button } from "react-bootstrap";

class ModalMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalOpened: !this.state.isModalOpened });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>Open modal</Button>
        <Modal isOpen={this.state.isModalOpened}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos fuga itaque magnam mollitia rem repudiandae vel veniam
            vitae. Consequatur, possimus.
          </p>
          <Button onClick={this.toggleModal}>Close</Button>
        </Modal>
      </div>
    );
  }
}

export default ModalMain;
