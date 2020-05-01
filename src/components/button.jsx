import React from 'react';
import '../styles/button.scss';

export default function Button ({ type = 'flat', onClick}) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <button
      className={`button button--${type}`}
      onClick={(e) => handleClick(e)}
    >
      <div className="button__icon"></div>
    </button>
  );
}
