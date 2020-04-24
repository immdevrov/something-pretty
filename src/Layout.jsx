import React from 'react';
import './index.scss';
import Button from './components/button';
import Toggle from './components/toggle';
import logo from './icons/logo.svg';
import Progress from './components/progress';

function Layout () {
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
          <div className="elements">
          <div className="elements__item">
              <h3 className="elements__title">Buttons: flat</h3>
              <div className="elements__el">
                <Button type="flat"/>
              </div>
            </div>
            <div className="elements__item">
              <h3 className="elements__title">Buttons: curved</h3>
              <div className="elements__el">
                <Button type="curved"/>
              </div>
            </div>
            <div className="elements__item">
              <h3 className="elements__title">Buttons: soft</h3>
              <div className="elements__el">
                <Button type="soft"/>
              </div>
            </div>
            <div className="elements__item">
              <h3 className="elements__title">Toggle</h3>
              <div className="elements__el">
                <Toggle />
              </div>
            </div>
            <div className="elements__item">
              <h3 className="elements__title">Progress Bar</h3>
              <div className="elements__el">
                <Progress percent="12"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
