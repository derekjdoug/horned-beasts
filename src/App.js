import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import MagnifyModal from './MagnifyModal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      allBeasts: data,
      selectedBeast: {}
    }
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleShowModal = (beastTitle) => {
    const selectedBeast = data.find(beast => beast.title === beastTitle);
    this.setState({showModal: true, selectedBeast});
  }

  handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === "1") {
      let filteredBeasts = data.filter(beast => beast.horns === 1);
      this.setState({ allBeasts: filteredBeasts });
    } else if (event.target.value === "2") {
      let filteredBeasts = data.filter(beast => beast.horns === 2);
      this.setState({ allBeasts: filteredBeasts });
    } else if (event.target.value === "3") {
      let filteredBeasts = data.filter(beast => beast.horns === 3);
      this.setState({ allBeasts: filteredBeasts });
    } else if (event.target.value === "100") {
      let filteredBeasts = data.filter(beast => beast.horns === 100);
      this.setState({ allBeasts: filteredBeasts });
    } else {
      this.setState({ allBeasts: data });
    }
  }

  render() {
    return (
      <div className="App">

        <Header />

        <Container>
          <Form>
            <label for="optionValues">How Many Horns?</label>
            <Form.Control onChange={this.handleChange} as="select" >
              <option value="All">All Horns</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Horns</option>
            </Form.Control>
          </Form>
        </Container>

        <Main allBeasts={this.state.allBeasts} handleShowModal={this.handleShowModal}/>
        <Footer />
        <MagnifyModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} />
      </div>
    );
  }
}

export default App;
