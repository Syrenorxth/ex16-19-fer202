import React, { useState } from 'react';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // luu lai gia tri count hien tai
  const handleSnapshot = () => {
    setSnapshot(count);
  };

  // khoi phuc count tu snapshot (neu da co snapshot)
  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div>
      <h1>State as a Snapshot Demo</h1>
      <p>Count: {count}</p>
      <p>Snapshot: {snapshot === null ? 'Chưa có' : snapshot}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleSnapshot}>Take Snapshot</button>
      <button onClick={handleRestore}>Restore Snapshot</button>
    </div>
  );
};

export default SnapshotDemo;
