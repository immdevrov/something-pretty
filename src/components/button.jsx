import React from 'react';
import '../styles/button.scss';

export default function Button ({ type }) {
  return (
    <button
      className={`button button--${type}`}
    >
      <div className="button__icon"></div>
    </button>
  );
}
