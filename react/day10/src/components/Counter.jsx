import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter() {
  const { count, increment, decrement, reset} = useCounter(0, 1, 1);

  return (
    <div>
      <h1>Counter Component 1</h1>
      <br /><br />

      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div >
  );
}

export default Counter;
