import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={() => setNum(num - 1)}>-</button>
        <p style={num < 0 ? { color: "red" } : { backgroundColor: "white" }}>
          {num}
        </p>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
      <button onClick={() => setNum(0)}>Reset Counter</button>
    </div>
  );
};

export default Counter;
