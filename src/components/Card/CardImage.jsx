import React from 'react';
function CardImage({ image, title }) {
  return <img src={image} alt={title} className="w-full h-48 object-cover" />
;
}

export default CardImage;
