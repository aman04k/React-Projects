import React, { useState } from 'react';

function Random() {
  const [gif, setGif] = useState('');

  const clickHandler = async () => {
    try {
      const response = await fetch(
        'https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjnNgmyzuHnW2'
      );
      const { data } = await response.json();
      setGif(data.images.original.url);
    } catch (error) {
      console.error('Error fetching the GIF:', error);
    }
  };

  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl mb-4">Random GIF</h1>
      {gif ? (
        <img src={gif} alt="Random GIF" className="w-full h-[300px] object-contain mb-4" />
      ) : (
        <p className="text-white">Click the button to generate a GIF!</p>
      )}
      <button
        onClick={clickHandler}
        className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg hover:bg-green-300 transition"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
