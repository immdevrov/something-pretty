import React from 'react';
import '../styles/button.scss';
import defaultButtonIcon from '../icons/default-button-icon.svg';
import pressedButtonIcon from '../icons/pressed-button-icon.svg';

class Button extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isPressed: false
    };
  }

  handleClick () {
    this.setState(state => ({
      isPressed: !state.isPressed
    }));
  }

  render () {
    return (
      <button
        className="button"
        onClick={ e => this.handleClick(e) }
      >
        <img
          className="button-icon"
          alt="GO"
          src={
            this.state.isPressed ? pressedButtonIcon : defaultButtonIcon
          }
        />
      </button>
    );
  }

}

export default Button;
