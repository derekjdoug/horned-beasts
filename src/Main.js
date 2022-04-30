import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
      <>
        {this.props.imageURLs.map(beast => (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imgUrl={beast.image_url}
            description={beast.description}
          />
        ))}
      </>
    )
  }
}

export default Main;
