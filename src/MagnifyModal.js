
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

class MagnifyModal extends React.Component {
  render() {
    return (

        <Modal size="lg" show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title className='modalTitle'>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalBody'>
            <Container className='modContainer'>
              <Image className='magImg' src={this.props.imgUrl} alt={this.props.description} title={this.props.title} />
            </Container>
            <p>{this.props.description}</p>
            <h2>❤️{this.props.clicks}</h2>
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
