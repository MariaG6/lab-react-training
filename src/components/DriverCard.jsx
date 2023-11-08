import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="container driver">
      <img src={img} alt="profile" />
      <div className='driver-content'>
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <p>{car.model}</p>
        <p>{car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
