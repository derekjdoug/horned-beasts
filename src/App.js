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
      showModal: false
    }
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleShowModal = () => {
    this.setState({showModal: true});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main imageURLs={imageURLs} handleShowModal={this.handleShowModal}/>
        <Footer />
        <MagnifyModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}

export default App;
