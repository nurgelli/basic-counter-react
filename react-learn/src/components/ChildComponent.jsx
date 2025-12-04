import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Title: {this.props.counter.id}</h2>
        <span
          style={{ fontWeight: 'bold' }}
          className={this.changeBadgeColor()}
        >
          {this.formatCount()}
        </span>
        <Button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ margin: 5, fontWeight: 'bold' }}
          variant="success"
        >
          +
        </Button>
        <Button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ margin: 5, fontWeight: 'bold' }}
          variant="primary"
        >
          -
        </Button>
        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          variant="danger"
        >
          Delete
        </Button>
      </div>
    );
  }

  changeBadgeColor() {
    let classes = 'btn btn-sm m-2 btn-';
    classes += this.props.counter.value === 0 ? 'warning' : 'info';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  }
}

export default Counter;
