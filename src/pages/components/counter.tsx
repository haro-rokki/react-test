import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [countTen, setCountTen] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  const incrementTen = () => setCountTen((c) => c + 10);
  const decrementTen = () => setCountTen((c) => c - 10);

  return (
    <>
      <div data-testid="normal">
        <span>{count}</span>
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
      <div data-testid="ten">
        <span>{countTen}</span>
        <button type="button" onClick={incrementTen}>
          +
        </button>
        <button type="button" onClick={decrementTen}>
          -
        </button>
      </div>
    </>
  );
};
