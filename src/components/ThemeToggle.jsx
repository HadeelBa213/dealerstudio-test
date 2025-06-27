import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className="relative group">
      {/* Tooltip */}
      {showTooltip && (
        <div className={`
          absolute -top-12 left-1/2 transform -translate-x-1/2 
          px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap
          transition-all duration-200 z-10
          ${theme === 'dark' 
            ? 'bg-gray-700 text-white border border-gray-600' 
            : 'bg-white text-gray-800 border border-gray-200 shadow-lg'
          }
          before:content-[''] before:absolute before:top-full before:left-1/2 
          before:transform before:-translate-x-1/2 before:border-4 
          before:border-transparent
          ${theme === 'dark' 
            ? 'before:border-t-gray-700' 
            : 'before:border-t-white'
          }
        `}>
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </div>
      )}

      {/* Main Toggle Container */}
      <div 
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Background Track */}
        <button
          onClick={handleToggle}
          className={`
            relative w-20 h-10 rounded-full p-1 transition-all duration-500 ease-in-out
            focus:outline-none focus:ring-4 focus:ring-opacity-40
            ${theme === 'dark' 
              ? 'bg-gradient-to-r from-slate-800 via-purple-900 to-slate-800 focus:ring-purple-400 hover:from-slate-700 hover:via-purple-800 hover:to-slate-700' 
              : 'bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 focus:ring-yellow-400 hover:from-amber-400 hover:via-yellow-500 hover:to-amber-400'
            }
            hover:scale-105 active:scale-95 transform
            shadow-lg hover:shadow-xl
            ${isAnimating ? 'pulse-glow' : ''}
          `}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {/* Sliding Circle */}
          <div
            className={`
              absolute top-1 w-8 h-8 rounded-full transition-all duration-500 ease-out
              flex items-center justify-center text-lg
              ${theme === 'dark' 
                ? 'left-1 bg-gradient-to-br from-indigo-400 to-purple-600 text-white shadow-purple-500/25' 
                : 'left-11 bg-gradient-to-br from-white to-yellow-100 text-amber-600 shadow-yellow-500/25'
              }
              ${isAnimating ? 'scale-110 rotate-180' : 'scale-100 rotate-0'}
              shadow-lg backdrop-blur-sm
              border-2 border-white/20
            `}
          >
            <span className={`transition-all duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
          </div>

          {/* Background Icons with Stars */}
          <div className="absolute inset-0 flex items-center justify-between px-3 text-sm">
            <div className={`transition-all duration-500 ${theme === 'dark' ? 'opacity-30 scale-90' : 'opacity-100 scale-100'}`}>
              ☀️
            </div>
            <div className={`transition-all duration-500 ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-30 scale-90'}`}>
              🌙
            </div>
          </div>

          {/* Animated Stars */}
          {theme === 'dark' && (
            <>
              <div className="absolute top-2 left-3 text-xs opacity-60 animate-pulse">✨</div>
              <div className="absolute bottom-2 right-4 text-xs opacity-40 animate-pulse delay-300">⭐</div>
            </>
          )}

          {/* Animated Sun Rays */}
          {theme === 'light' && (
            <>
              <div className="absolute top-1 right-3 text-xs opacity-60 animate-ping">✨</div>
              <div className="absolute bottom-1 left-3 text-xs opacity-40 animate-ping delay-500">💫</div>
            </>
          )}
        </button>

        {/* Floating Sparkles on Toggle */}
        {isAnimating && (
          <>
            <div className="absolute -top-3 left-2 pointer-events-none bounce-in">
              <div className="text-lg animate-ping">
                {theme === 'dark' ? '⭐' : '✨'}
              </div>
            </div>
            <div className="absolute -top-3 right-2 pointer-events-none bounce-in delay-100">
              <div className="text-lg animate-ping">
                {theme === 'dark' ? '✨' : '🌟'}
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 pointer-events-none bounce-in delay-200">
              <div className="text-lg animate-ping">
                {theme === 'dark' ? '🌟' : '💫'}
              </div>
            </div>
          </>
        )}

        {/* Ripple Effect */}
        {isAnimating && (
          <div className={`
            absolute inset-0 rounded-full animate-ping opacity-25
            ${theme === 'dark' 
              ? 'bg-purple-500' 
              : 'bg-yellow-400'
            }
          `} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
