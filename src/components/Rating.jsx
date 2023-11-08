import { Star } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

function Rating(props) {
  const ratingNumber = Math.round(props.children);

  return (
    <div>
      <Star size={32} weight={ratingNumber >= 1 ? 'fill' : 'bold'} />
      <Star size={32} weight={ratingNumber >= 2 ? 'fill' : 'bold'} />
      <Star size={32} weight={ratingNumber >= 3 ? 'fill' : 'bold'} />
      <Star size={32} weight={ratingNumber >= 4 ? 'fill' : 'bold'} />
      <Star size={32} weight={ratingNumber >= 5 ? 'fill' : 'bold'} />
    </div>
  );
}

export default Rating;
