import React from 'react';
import Image from 'react-bootstrap/Image';

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

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image src={this.props.imgUrl} alt={this.props.description} title={this.props.title} onClick={this.handleClick} roundedCircle={true} className="beastImg" />
        <p>{this.props.description}</p>
        <p><span>❤️</span> {this.state.clicks}</p>
      </>
    )
  }
}

export default HornedBeast;
