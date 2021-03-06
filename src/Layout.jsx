/* eslint-disable react/jsx-no-target-blank */
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
    this.changeText = this.changeText.bind(this);
    this.changeProgress = this.changeProgress.bind(this);
    this.changeColorMode = this.changeColorMode.bind(this);
    this.changeDescription = this.changeDescription.bind(this);

    this.state = {
      components: [
        {
          id: 0,
          c: Button,
          props: {
            type: 'flat',
            onClick: this.changeDescription
          },
          displayName: 'Button flat'
        },
        {
          id: 1,
          c: Button,
          props: {
            type: 'curved',
            onClick: this.changeProgress
          },
          displayName: 'Button curved'
        },
        {
          id: 2,
          c: Button,
          props: {
            type: 'soft',
            onClick: this.changeText
          },
          displayName: 'Button soft'
        },
        {
          id: 3,
          c: Toggle,
          props: {
            onClick: this.changeColorMode
          },
          displayName: 'Toggle'
        },
        {
          id: 4,
          c: Progress,
          props: { percent: '15' },
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
      mainTitle: 'Elements',
      darkMode: false,
      descriptionIsDefault: true

    };
  }

  isInput (id) {
    return id === 5;
  }

  isProgress (id) {
    return id === 4;
  }

  inputOnChange (value) {
    this.setState(state => ({
      components: state.components.map((c) => {
        if (this.isInput(c.id)) {
          return { ...c, props: { ...c.props, value } };
        }
        return { ...c };
      })
    }));
  }

  changeText () {
    this.setState(state => ({
      mainTitle: state.components.find(c => this.isInput(c.id)).props.value
    }));
  }

  changeProgress () {
    this.setState(state => ({
      components: state.components.map((c) => {
        if (this.isProgress(c.id)) {
          return { ...c, props: { ...c.props, percent: (+c.props.percent + 15) % 100 } };
        }
        return { ...c };
      })
    }));
  }

  changeColorMode () {
    if (this.state.darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
    this.setState(state => ({
      darkMode: !state.darkMode
    }));
  }

  changeDescription () {
    this.setState(state => ({ descriptionIsDefault: !state.descriptionIsDefault }));
  }

  render () {
    const defalutDescription = 'The main goal is to use a mix of familiar and analog elements in a minimalistic manner. Such effects achieved through utilizing gradients and shadows';
    const customDescription = (
      <aside>
        <p>
          Design Neomorphism Guide 2.0 from <a target="_blank" href="https://www.figma.com/file/J1uPSOY5k577mDpSfGFven/Neomorphism-Guide-2.0-%7C-Original?node-id=26580%3A313">Figma</a>
        </p>
        <p>
          <a target="_blank" href="https://github.com/immdevrov/something-pretty">Github Repo</a>
        </p>
      </aside>
    );
    const description = this.state.descriptionIsDefault ? defalutDescription : customDescription;
    return (
      <div className="layout">
        <div className="container">
          <header className="header">
            <div className="header__wrapper-logo">
              <img src={logo} alt="logo" className="logo"/>
            </div>
            <h1 className="header__title">
              {this.state.darkMode ? 'Dark Version' : 'Light Version'}
            </h1>
          </header>
          <main className="main">
            <div className="main__title-block">
              <h2 className="main__title">{this.state.mainTitle}</h2>
              <div className="main__description">
                {description}
              </div>
            </div>
            { RenderComponents(this.state.components) }
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
