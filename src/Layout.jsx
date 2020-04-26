import React from 'react';
import './index.scss';
import Button from './components/button';
import Toggle from './components/toggle';
import logo from './icons/logo.svg';
import Progress from './components/progress';
import Input from './components/input';
import RenderComponents from './components/component-render';

class Layout extends React.Component {
  constructor (props) {
    super(props);
    this.inputOnChange = this.inputOnChange.bind(this);

    this.state = {
      components: [
        {
          id: 0,
          c: Button,
          props: { type: 'flat'},
          displayName: 'Button flat'
        },
        {
          id: 1,
          c: Button,
          props: { type: 'curved'},
          displayName: 'Button curved'
        },
        {
          id: 2,
          c: Button,
          props: { type: 'soft'},
          displayName: 'Button soft'
        },
        {
          id: 3,
          c: Toggle,
          props: {},
          displayName: 'Toggle'
        },
        {
          id: 4,
          c: Progress,
          props: { percent: '35' },
          displayName: 'Progress'
        },
        {
          id: 5,
          c: Input,
          props: {
            value: '',
            onChange: this.inputOnChange
          },
          displayName: 'Input'
        }
      ],
    };
  }

  isInput (id) {
    return id === 5;
  }

  inputOnChange (value) {
    this.setState(state => ({
      components: state.components.map((c) => {
        if (this.isInput(c.id)) {
          return { ...c, props: { ...c.props, value: value } };
        }
        return { ...c };
      })
    }));
  }

  render () {
    return (
      <div className="layout">
        <div className="container">
          <header className="header">
            <div className="header__wrapper-logo">
              <img src={logo} alt="logo" className="logo"/>
            </div>
            <h1 className="header__title">Light Version</h1>
          </header>
          <main className="main">
            <div className="main__title-block">
              <h2 className="main__title">Elements</h2>
              <div className="main__description">
                The main goal is to use a mix of familiar and analog elements in a minimalistic manner. Such effects achieved through utilizing gradients and shadows
              </div>
            </div>
            {RenderComponents(this.state.components)}
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
