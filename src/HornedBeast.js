import React from 'react';
// import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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

      <Card>
        <Container>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img src={this.props.imgUrl} alt={this.props.description} title={this.props.title} onClick={this.handleClick} roundedCircle={true} className="beastImg" />
          <Card.Body>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary" className="button" onClick={this.handleClick}>❤️ {this.state.clicks}</Button>
          </Card.Body>
        </Container>
      </Card>

      </>
    )
  }
}

export default HornedBeast;
