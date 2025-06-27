import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">G Automotive</h1>
    <button
  onClick={toggleTheme}
  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded transition duration-300 cursor-pointer"
>
  {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

    </header>
  );
}

export default Header;
