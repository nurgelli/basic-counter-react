import Counters from './components/countComponent';
import React, { Component } from 'react';
import NavBar from './components/navBarComponent';
import { Nav } from 'react-bootstrap';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 4 },
      { id: 4, value: 5 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    counters[i].value++;
    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    counters[i].value--;
    this.setState({
      counters,
    });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (c) => counterId !== c.id
    );
    this.setState({
      counters, //: counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters,
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length}></NavBar>
        <main>
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
