import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import MagnifyModal from './MagnifyModal';

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
        <h2>{this.props.title}</h2>
        <Image src={this.props.imgUrl} alt={this.props.description} title={this.props.title} onClick={this.handleImgClick} roundedCircle={true} className="beastImg" />
        <p>{this.props.description}</p>
        <Button variant="primary" className="button" onClick={this.handleClick}>❤️ {this.state.clicks}</Button>
        <MagnifyModal title={this.props.title} description={this.props.description} imgUrl={this.props.imgUrl} clicks={this.state.clicks} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
      </>
    )
  }
}

export default HornedBeast;
