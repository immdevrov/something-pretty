import React from 'react';
import '../styles/progress.scss';

function isPercentValid (percent) {
  return +percent >= 0 && +percent <= 100;
}

function Progress ({ percent = '0', width = '313', begunokWidth = '70' }) {
  if (!isPercentValid(percent)) { return <div>Ошибка</div>; }

  const left = parseInt(+percent / 100 * (+width - +begunokWidth)) + '';
  const begunokStyle = {
    left: `${left}px`,
    width: `${begunokWidth}px`
  };

  return (
    <div className="progress" style={ { width: `${width}px` } }>
      <div className="progress__begunok" style={ begunokStyle }></div>
    </div>
  );
}

export default Progress;
