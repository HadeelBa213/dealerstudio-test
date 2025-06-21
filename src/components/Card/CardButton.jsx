import React from 'react';
function CardButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
}

export default CardButton;
