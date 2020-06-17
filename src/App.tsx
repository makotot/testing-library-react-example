import * as React from "react";

export const Counter: React.FC = () => {
  const [count, update] = React.useState(0);
  const increment = () => update(count + 1);
  const decrement = () => update(count - 1);
  const reset = () => update(0);

  return (
    <div>
      <div data-testid="counter">{count}</div>
      <button onClick={increment} data-testid="increment">
        +
      </button>
      <button onClick={decrement} data-testid="decrement">
        -
      </button>
      <button onClick={reset} data-testid="reset">
        reset
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
