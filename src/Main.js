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
        <HornedBeast title={'Rhino costume'} imgUrl={this.props.imageURLs[9].image_url} description={'Mascots have to get their costumes somewhere'} clicks={0} />
        <HornedBeast title={'Believe'} imgUrl={this.props.imageURLs[10].image_url} description={'I believe in unicorns, do you?'} clicks={0} />
        <HornedBeast title={'Markhor'} imgUrl={this.props.imageURLs[11].image_url} description={'These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?'} clicks={0} />
        <HornedBeast title={'Baby markhor'} imgUrl={this.props.imageURLs[12].image_url} description={'Even the babies are adorable'} clicks={0} />
        <HornedBeast title={'Mouflon'} imgUrl={this.props.imageURLs[13].image_url} description={'Those horns though'} clicks={0} />
        <HornedBeast title={'Addax'} imgUrl={this.props.imageURLs[14].image_url} description={'This guy is basically extinct but survives well in captivity, so they\'re frequently found in zoos'} clicks={0} />
        <HornedBeast title={'Baby mouflon'} imgUrl={this.props.imageURLs[15].image_url} description={'The cuteness that is a baby mouflon asleep'} clicks={0} />
        <HornedBeast title={'Happy Jackson\'s Chameleon'} imgUrl={this.props.imageURLs[16].image_url} description={'These are really common in Hawaii'} clicks={0} />
        <HornedBeast title={'Serious Jackson\'s Chameleon'} imgUrl={this.props.imageURLs[17].image_url} description={'This one is very serious.'} clicks={0} />
        <HornedBeast title={'Horned Lizard'} imgUrl={this.props.imageURLs[18].image_url} description={'Fave food: ants'} clicks={0} />
        <HornedBeast title={'Smaug'} imgUrl={this.props.imageURLs[19].image_url} description={'Fan illustration of Smaug from The Hobbit'} clicks={0} />
      </>
    )
  }
}

export default Main;
