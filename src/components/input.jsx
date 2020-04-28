import React from 'react';
import '../styles/input.scss';

export default function Input ({ value, onChange }) {
  return (
      <input
        className="input"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
    );
}
