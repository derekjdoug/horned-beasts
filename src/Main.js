import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'UniWhal'} imgUrl={this.props.imageURLs[0].image_url} description={'A unicorn and a narwhal nuzzling their horns'} clicks={0} />
        <HornedBeast title={'Rhino Family'} imgUrl={this.props.imageURLs[1].image_url} description={'Mother (or father) rhino with two babies'} clicks={0} />
        <HornedBeast title={'Unicorn Head'} imgUrl={this.props.imageURLs[2].image_url} description={'Someone wearing a creepy unicorn head mask'} clicks={0} />
        <HornedBeast title={'UniLego'} imgUrl={this.props.imageURLs[3].image_url} description={'Lego figurine dressed in a unicorn outfit'} clicks={0} />
        <HornedBeast title={'Basically a unicorn'} imgUrl={this.props.imageURLs[4].image_url} description={'A narwhal is basically a unicorn after all, right?'} clicks={0} />
        <HornedBeast title={'#truth'} imgUrl={this.props.imageURLs[5].image_url} description={'The truth behind narwhals'} clicks={0} />
        <HornedBeast title={'Baby Rhino'} imgUrl={this.props.imageURLs[6].image_url} description={'This is actually a figurine but it looks kinda real'} clicks={0} />
        <HornedBeast title={'Cera'} imgUrl={this.props.imageURLs[7].image_url} description={'Three horns but still, horns. And who doesn\'t like The Land Before Time?'} clicks={0} />
        <HornedBeast title={'Narwhal costume'} imgUrl={this.props.imageURLs[8].image_url} description={'A woman wearing a blue narwhal costume'} clicks={0} />
      </>
    )
  }
}

export default Main;
