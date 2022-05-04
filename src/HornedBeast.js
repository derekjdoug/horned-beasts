import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    }
  }

  handleClick = () => {
    this.setState({clicks: this.state.clicks + 1});
  }


liftsStateToApp = () => {
  this.props.handleShowModal(this.props.title);
}

  render() {
    return (
      <>
        <Container>
          <Card className='beastCard'>
            <Container>
              <Card.Title>{this.props.title}</ Card.Title>
              <Card.Body>
                <Card.Img src={this.props.imgUrl} alt={this.props.description} title={this.props.title} onClick={this.liftsStateToApp} roundedCircle={true} className="beastImg" />
                <Card.Text>{this.props.description}</ Card.Text>
                <Button variant="primary" className="button" onClick={this.handleClick}>❤️ {this.state.clicks}</Button>
              </Card.Body>
            </Container>
          </Card>
        </Container>
      </>
    )
  }
}

export default HornedBeast;
