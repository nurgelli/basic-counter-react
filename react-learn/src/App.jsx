import Counters from './components/MainComponent';
import React, { useState } from 'react';
import NavBar from './components/NavBarComponent';

const App = () => {
  const [count, setCount] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 3 },
    { id: 3, value: 4 },
    { id: 4, value: 5 },
  ]);

  const handleIncrement = (counter) => {
    setCount((prev) =>
      prev.map((newVal) =>
        newVal.id === counter.id
          ? { ...newVal, value: newVal.value + 1 }
          : newVal
      )
    );

  };

  const handleDecrement = (counter) => {
    setCount(prev => 
      prev.map(newVal =>
        newVal.id === counter.id ? {...newVal, value: newVal.value - 1} : newVal
      )

    )
  };

  const handleDelete = (counterId) => {
    setCount(count.filter((c) => counterId !== c.id));
  };

  const handleReset = () => {
    setCount(
      count.map((c) => {
        c.value = 0
        console.log(c)
        return c;
      })
    );
  };

  return (
    <React.Fragment>
      <NavBar
        totalCounter={count.filter((c) => c.value > 0).length}
      ></NavBar>
      <main>
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={count}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
