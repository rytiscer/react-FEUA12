import { useState } from "react";

const Task = () => {
  const [count, setCount] = useState(500);
  const amounts = [10, 20, 50, 100];
  return (
    <div>
      <p>Current balance {count}</p>
      <div className="buttons">
        {amounts.map((amount) => (
          <button key={amount} onClick={() => setCount(count + amount)}>
            {"+" + amount}
          </button>
        ))}
        <br />
        {amounts.map((amount) => (
          <button key={amount} onClick={() => setCount(count - amount)}>
            {"-" + amount}
          </button>
        ))}
        <br />
        <button onClick={() => setCount(0)}>-ALL</button>
      </div>
    </div>
  );
};

export default Task;
