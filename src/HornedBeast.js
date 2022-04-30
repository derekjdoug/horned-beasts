import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
  constructor(props) {
    // eslint-disable-next-line no-lone-blocks
    super(props);
    this.state = {
      clicks: 0
    }
  }

  handleClick = () => {
    this.setState({clicks: this.state.clicks + 1});
  }

  handleImgClick = () => {
    this.props.handleShowModal();
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image src={this.props.imgUrl} alt={this.props.description} title={this.props.title} onClick={this.handleImgClick} roundedCircle={true} className="beastImg" />
        <p>{this.props.description}</p>
        <Button variant="primary" className="button" onClick={this.handleClick}>❤️ {this.state.clicks}</Button>
      </>
    )
  }
}

export default HornedBeast;
