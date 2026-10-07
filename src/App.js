import React, { useState } from 'react';
import EventHandlingDemo from './Component/EventHandlingDemo';
import RenderAndCommitDemo from './Component/RenderAndCommitDemo';
import SnapshotDemo from './Component/SnapshotDemo';
import AnimalList from './Component/AnimalList';

function App() {
  // bai dang duoc chon
  const [exercise, setExercise] = useState(16);

  return (
    <React.StrictMode>
      <div className="menu">
        <button className={exercise === 16 ? 'active' : ''} onClick={() => setExercise(16)}>Bài 16</button>
        <button className={exercise === 17 ? 'active' : ''} onClick={() => setExercise(17)}>Bài 17</button>
        <button className={exercise === 18 ? 'active' : ''} onClick={() => setExercise(18)}>Bài 18</button>
        <button className={exercise === 19 ? 'active' : ''} onClick={() => setExercise(19)}>Bài 19</button>
      </div>
      <hr />

      {exercise === 16 && <EventHandlingDemo />}
      {exercise === 17 && <RenderAndCommitDemo />}
      {exercise === 18 && <SnapshotDemo />}
      {exercise === 19 && <AnimalList />}
    </React.StrictMode>
  );
}

export default App;
