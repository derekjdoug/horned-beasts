import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from './imageURLs.json';
import MagnifyModal from './MagnifyModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleShowModal = (beastTitle) => {
    const selectedBeast = imageURLs.find(beast => beast.title === beastTitle);
    this.setState({showModal: true, selectedBeast});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main imageURLs={imageURLs} handleShowModal={this.handleShowModal}/>
        <Footer />
        <MagnifyModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} />
      </div>
    );
  }
}

export default App;
