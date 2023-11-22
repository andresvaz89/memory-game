import React from 'react';
import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="../public/img/cover.png"
          alt="card back"
          onClick={handleClick}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default SingleCard;
