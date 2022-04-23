import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'Narwhal'} imgUrl={'img/narwhal.jpg'} description={'whale unicorn'} />
        <HornedBeast title={'Ibex'} imgUrl={'img/ibex.jpg'} description={'dramatic goat'} />
        <HornedBeast title={'Rhinoceros'} imgUrl={'img/rhino.jpg'} description={'endangered species'} />
      </>
    )
  }
}

export default Main;
