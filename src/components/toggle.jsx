import React from 'react';
import '../styles/toggle.scss';

export default class Toggle extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      toggled: false
    };
  }

  handleClick (e) {
    e.preventDefault();
    this.setState(state => ({
      toggled: !state.toggled
    }));
    if (this.props && this.props.onClick && typeof this.props.onClick === 'function') {
      this.props.onClick();
    }
  }

  render () {
    return (
      <div className="toggle">
        <div
          className="toggle__status-field"
          style={ this.state.toggled ? {} : { opacity: .3 } }
        >
          { this.state.toggled ? 'ON' : 'OFF' }
        </div>
        <div className="toggle__switcher-field">
          <div
            className="toggle__switcher"
            onClick={e => this.handleClick(e)}
            style={ this.state.toggled ? { transform: 'scale(-1, 1)' } : {} }
          >
          </div>
        </div>
      </div>
    );
  }
}
