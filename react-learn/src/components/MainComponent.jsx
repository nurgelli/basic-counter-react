import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Counter from './ChildComponent';

const Counters = (props) =>  {

    const {counters, onDelete, onDecrement, onIncrement, onReset} = props
    return (
      <div>
        <Button
          style={{ fontWeight: 'bold' }}
          className="btn btn-info btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </Button>
        
        <ul>
          {counters.map((counter) => (
            <li>
              <Counter
                key={counter.id}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete}
                counter={counter}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  
}

export default Counters;
