import React from 'react';

function CardBody({ text }) {
  return (
    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
      {Array.isArray(text)
        ? text.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))
        : <p>{text}</p>}
    </div>
  );
}

export default CardBody;
