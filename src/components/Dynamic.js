import React, { useState, useEffect } from "react";

const Dynamic = () => {
  const me = [
    "MERN Stack Developer",
    "Freelancer",
    "Open-Source Contributor",
    "Student"
  ];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => (c + 1) % 4);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Iterating over array</h1>
      <div className="realtime">
        <p>Hi! I am: </p>
        {me[counter]}
        <h3>Counter: {counter}</h3>
      </div>
    </div>
  );
};

export default Dynamic;
