// import { useState } from 'react';
import './App.css';
import Random from './components/Random';
import Gif from './components/Gif';

function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-red-500 relative overflow-hidden items-center">
      <h1 className="absolute bg-white rounded-lg w-11/12 text-center text-4xl font-bold py-2 px-10 mt-10">
        Random GIF
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Gif />
      </div>
    </div>
  );
}

export default App;
