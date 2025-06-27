import React from 'react';
import ThemeToggle from '../ThemeToggle';

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md transition-colors duration-500 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-purple-500 dark:to-pink-600 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110">
          <span className="text-white font-bold text-lg">G</span>
        </div>
        
        {/* Company Name */}
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
            G Automotive
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Quality • Innovation • Excellence
          </p>
        </div>
      </div>
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </header>
  );
}

export default Header;
