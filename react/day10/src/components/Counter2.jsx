import React from 'react'
import { useState } from 'react'
import useCounter from '../hooks/useCounter';

function Counter2() {
   const { count, increment, decrement, reset} = useCounter(10, 10, 15);
    return (
      <div>
          <h1>Counter Component 2</h1>
          <br /><br />
         
          <h1>Count: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
      </div>
    )
}

export default Counter2