
import React from 'react';
import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardButton from './CardButton';

function Card({ image, title, text, button , isActive, onClick }) {
  return (
    <div
  className={`w-full max-w-[260px] flex flex-col justify-between bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border-4 transition-all duration-300 ${
    isActive ? 'border-blue-600' : 'border-transparent'
  }`}
>

  <div className="relative w-full h-40">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover rounded-t-lg"
  />
  
  {/* Hover Overlay with CTA Text */}
  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-t-lg">
    <span className="text-white text-sm font-medium">View More</span>
  </div>
</div>

  

  <div className="p-4 flex flex-col flex-grow justify-between mt-4">
    <div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h2>
      {text.map((para, idx) => (
        <p key={idx} className={`text-sm text-gray-600 dark:text-gray-300 ${idx !== text.length - 1 ? 'mb-2' : ''}`}>
          {para}
        </p>
      ))}
    </div>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md w-full text-sm font-medium mt-4"
    onClick={onClick}>
      {button}
    </button>
  </div>
</div>

  );
}



export default Card;
