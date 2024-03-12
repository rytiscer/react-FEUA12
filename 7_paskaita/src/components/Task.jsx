import { useState } from "react";

const Task = () => {
  const [count, setCount] = useState(500);
  return (
    <div>
      <p>Current balance {count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count - 10)}>-10</button>
        <button onClick={() => setCount(count - 20)}>-20</button>
        <button onClick={() => setCount(count - 50)}>-50</button>
        <button onClick={() => setCount(count - 100)}>-100</button>
        <button onClick={() => setCount(count + 10)}>+10</button>
        <button onClick={() => setCount(count + 20)}>+20</button>
        <button onClick={() => setCount(count + 50)}>+50</button>
        <button onClick={() => setCount(count + 100)}>+100</button>
        <button onClick={() => setCount(0)}>-ALL</button>
      </div>
    </div>
  );
};

export default Task;
