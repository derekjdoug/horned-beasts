import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from './imageURLs.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main imageURLs={imageURLs} />
        <Footer />
      </div>
    );
  }
}

export default App;
