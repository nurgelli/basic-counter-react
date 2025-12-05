import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const Counter = (props) => {
  const changeBadgeColor = () => {
    let classes = 'btn btn-sm m-2 btn-';
    classes += props.counter.value === 0 ? 'warning' : 'dark';
    return classes;
  };
  const formatCount = () => {
    return props.counter.value === 0 ? 'zero' : props.counter.value;
  };
  return (
    <div>
      <h2>Title: {props.counter.id}</h2>
      <span
        style={{ fontWeight: 'bold', color: 'white' }}
        className={changeBadgeColor()} // <== Here with (), because this is js function
      >
        {formatCount()}
      </span>
      <Button
        onClick={() => props.onIncrement(props.counter)}
        style={{ margin: 5, fontWeight: 'bold' }}
        variant="success"
      >
        +
      </Button>
      <Button
        onClick={() => props.onDecrement(props.counter)}
        style={{ margin: 5, fontWeight: 'bold' }}
        variant="primary"
      >
        -
      </Button>
      <Button
        onClick={() => props.onDelete(props.counter.id)}
        variant="danger"
      >
        Delete
      </Button>
    </div>
  );
};

export default Counter;
