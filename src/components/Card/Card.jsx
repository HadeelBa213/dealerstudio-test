import React from 'react';

function Card({ image, title, text, button, isActive, onClick }) {
  return (
    <div
      data-testid="card"
      className={`rounded-lg overflow-hidden shadow-md dark:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:shadow-2xl
        border ${isActive ? 'border-blue-600 dark:border-purple-500 border-4 shadow-lg dark:shadow-purple-500/25' : 'border-gray-200 dark:border-gray-700'}
        bg-white dark:bg-gray-800`}
    >
      <div className="relative w-full h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-t-lg">
          <span className="text-white text-sm font-medium">View More</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between mt-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {title}
          </h2>
          {Array.isArray(text) &&
            text.map((para, idx) => (
              <p
                key={idx}
                className={`text-sm text-gray-600 dark:text-gray-300 ${
                  idx !== text.length - 1 ? 'mb-2' : ''
                }`}
              >
                {para}
              </p>
            ))}
        </div>

        <button
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800 text-white px-6 py-2 rounded-full shadow-md w-full text-sm font-medium mt-4 transition-all duration-300 transform hover:scale-105"
          onClick={onClick}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Card;
