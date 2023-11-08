import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const cardNumber = `********${number.slice(-4)}`;
  const expirationDate = `${expirationMonth}/${expirationYear}`;

  return (
    <div className='card' style={cardStyle}>
        <div className="card-image">
          {type === 'Visa' ? (
            <img src="/visa.png" alt='visa' />
          ) : (
            <img src="/master-card.svg" alt='mastercard' />
          )}
        </div>
      <div className="card-content">
        <h2>{cardNumber}</h2>
        <div>
          <p>Expires {expirationDate}</p>
          <p>{bank}</p>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
