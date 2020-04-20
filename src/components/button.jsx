import React from 'react';
import '../styles/button.scss';
import defaultButtonIcon from '../icons/default-button-icon.svg';
import pressedButtonIcon from '../icons/pressed-button-icon.svg';

export default function Button () {
  return (
    <button
      className="button"
    >
      <img
        className="button__icon--pressed"
        alt="GO"
        src={pressedButtonIcon}
      />
      <img
        className="button__icon--nonpressed"
        alt="GO"
        src={defaultButtonIcon}
      />
    </button>
  );
}
