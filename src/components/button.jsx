import React from 'react';
import '../styles/button.scss';

export default function Button ({ type, onClick}) {
  return (
    <button
      className={`button button--${type}`}
      onClick={() => onClick()}
    >
      <div className="button__icon"></div>
    </button>
  );
}
