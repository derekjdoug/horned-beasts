import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'Narwhal'} imgUrl={'https://www.euclidlibrary.org/sites/default/files/tickles/narwhal%20under%20the%20sea.jpg'} description={'whale unicorn'} />
        <HornedBeast title={'Ibex'} imgUrl={'https://animals.sandiegozoo.org/sites/default/files/inline-images/nubian_ibex_male.jpg'} description={'dramatic goat'} />
        <HornedBeast title={'Rhinoceros'} imgUrl={'https://i.natgeofe.com/k/0e9fa05c-7cdb-4e15-a32a-b4fd60d64709/black-rhino-closeup.jpg'} description={'endangered species'} />
      </>
    )
  }
}

export default Main;
