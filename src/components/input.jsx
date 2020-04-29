import React from 'react';
import '../styles/input.scss';

export default function Input ({ value, onChange }) {
  const handleChange = (e) => {
    e.preventDefault();
    if (onChange && typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  return (
      <input
        className="input"
        value={value}
        onChange={e => handleChange(e)}
      ></input>
    );
}
