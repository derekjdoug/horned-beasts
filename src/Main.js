import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.imageURLs.map(beast => (
            <HornedBeast
              key={beast._id}
              title={beast.title}
              imgUrl={beast.image_url}
              description={beast.description}
              handleShowModal={this.props.handleShowModal}
            />
          ))}
        </Row>
      </>
    )
  }
}

export default Main;
