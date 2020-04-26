import React from 'react';
import '../styles/input.scss';

export default class Input extends React.Component {
  constructor (props) {
    super(props);
  }

  handleChange (e) {
    e.preventDefault();
    this.props.onChange(e.target.value);
  }

  render () {
    const value = this.props.value;
    return (
      <input
        className="input"
        value={value}
        onChange={e => this.handleChange(e)}
      ></input>
    );
  }
}
