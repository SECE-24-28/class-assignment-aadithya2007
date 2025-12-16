import { useState } from 'react';

const useCounter = (initialValue=0, incrementValue=1, decrementValue=1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + incrementValue);
  };

  const decrement = () => {
    setCount(count - decrementValue);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
