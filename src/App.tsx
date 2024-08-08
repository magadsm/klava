import React, { useState, useEffect } from 'react';

interface Key {
  label: string;
  onClick: () => void;
}

const keysLeft = [
  { label: 'Q', onClick: () => {} },
  { label: 'W', onClick: () => {} },
  { label: 'E', onClick: () => {} },
  { label: 'R', onClick: () => {} },
  { label: 'T', onClick: () => {} },
  { label: 'A', onClick: () => {} },
  { label: 'S', onClick: () => {} },
  { label: 'D', onClick: () => {} },
  { label: 'F', onClick: () => {} },
  { label: 'G', onClick: () => {} },
  { label: 'Z', onClick: () => {} },
  { label: 'X', onClick: () => {} },
  { label: 'C', onClick: () => {} },
  { label: 'V', onClick: () => {} },
  { label: 'B', onClick: () => {} },
];

const keysRight = [
  { label: 'Y', onClick: () => {} },
  { label: 'U', onClick: () => {} },
  { label: 'I', onClick: () => {} },
  { label: 'O', onClick: () => {} },
  { label: 'P', onClick: () => {} },
  { label: 'H', onClick: () => {} },
  { label: 'J', onClick: () => {} },
  { label: 'K', onClick: () => {} },
  { label: 'L', onClick: () => {} },
  { label: 'N', onClick: () => {} },
  { label: 'M', onClick: () => {} },
];

const Keyboard = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleKeyClick = (label: string) => {
    setInputValue(inputValue + label);
  };

  const handleSendMessage = () => {
    setMessages([...messages, inputValue]);
    setInputValue('');
  };

  return (
    <div
      className="flex flex-col h-screen w-screen transform rotate-90"
      style={{ height: height, width: width }}
    >
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded mb-2">
            {message}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center h-12">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-1/2 h-8 p-2 border border-gray-400 rounded"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center items-center h-1/2">
        <div className="flex flex-col justify-center items-center w-1/2">
          {keysLeft.map((key, index) => (
            <button
              key={index}
              onClick={() => handleKeyClick(key.label)}
              className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-2"
            >
              {key.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          {keysRight.map((key, index) => (
            <button
              key={index}
              onClick={() => handleKeyClick(key.label)}
              className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-2"
            >
              {key.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;