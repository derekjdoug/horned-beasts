import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import MagnifyModal from './MagnifyModal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class HornedBeast extends React.Component {
  constructor(props) {
    // eslint-disable-next-line no-lone-blocks
    super(props);
    this.state = {
      clicks: 0,
      showModal: false,
    }
  }

  handleClick = () => {
    this.setState({clicks: this.state.clicks + 1});
  }

  handleImgClick = () => {
    this.setState({ showModal: true})
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }


  render() {
    return (
      <>
        <Container>
          <Card className='beastCard'>
            <Container>
              <Card.Title>{this.props.title}</ Card.Title>
              <Card.Body>
                <Card.Img src={this.props.imgUrl} alt={this.props.description} title={this.props.title} onClick={this.handleImgClick} roundedCircle={true} className="beastImg" />
                <Card.Text>{this.props.description}</ Card.Text>
                <Button variant="primary" className="button" onClick={this.handleClick}>❤️ {this.state.clicks}</Button>
                <MagnifyModal title={this.props.title} description={this.props.description} imgUrl={this.props.imgUrl} clicks={this.state.clicks} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
              </Card.Body>
            </Container>
          </Card>
        </Container>
      </>
    )
  }
}

export default HornedBeast;
