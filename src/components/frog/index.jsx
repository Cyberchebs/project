import { useState } from "react";

export default function Frogger() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={reset}>reset</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
}
