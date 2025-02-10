// src/App.js
import React from 'react';
import Board from './components/board';
import { Divider } from '@heroui/react';

function App() {
  return (
    <div className="App">
      <h1 className='pl-4 pb-4'>Cubo Kanban</h1>
      <Divider className='text-zinc-400 mb-4'/>
      <Board />
    </div>
  );
}

export default App;