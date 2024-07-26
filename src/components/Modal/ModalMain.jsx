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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, illum,
            in! Architecto assumenda, blanditiis commodi cum dolorem dolorum
            eaque error, hic, labore repudiandae sapiente temporibus velit
            voluptatibus? Dignissimos fugit perferendis sed similique vel!
            Aliquid aut culpa deserunt dolorem doloribus facere hic, illum iusto
            maiores mollitia, neque nulla porro sit vero!
          </p>
          <Button onClick={this.toggleModal}>Close</Button>
        </Modal>
      </div>
    );
  }
}

export default ModalMain;
