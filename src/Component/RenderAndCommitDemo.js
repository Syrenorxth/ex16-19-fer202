import React, { useState } from 'react';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  // doi state -> React render lai va commit thay doi len DOM
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Render and Commit Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default RenderAndCommitDemo;
