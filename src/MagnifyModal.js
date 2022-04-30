import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MagnifyModal extends React.component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Img>{this.props.image_url}</Modal.Img>
          <Modal.Text>{this.props.description}</Modal.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MagnifyModal;
