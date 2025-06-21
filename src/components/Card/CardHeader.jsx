import React from 'react';
function CardHeader({ title }) {
  return (
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
      {title}
    </h2>
  );
}

export default CardHeader;
