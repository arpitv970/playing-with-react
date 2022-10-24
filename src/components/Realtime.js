import React, { useEffect, useState } from "react";

const Name = () => {
  const [name, setName] = useState("...");

  useEffect(() => {
    document.title = `You have entered: ${name};`;
  });
  return (
    <div>
      <h1>Real time typing</h1>
      <div className="realtime">
        <p>Hi {name}!</p>
        <label>Enter name: </label>
        <input
          type="text"
          name="xyz"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Name;
