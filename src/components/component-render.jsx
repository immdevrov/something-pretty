import React from 'react';


export default function RenderComponents (components) {
  const componentsList = components.map(({ c, props, id, displayName }) =>
    <div className="elements__item" key={id}>
      <h3 className="elements__title">{ displayName }</h3>
      <div className="elements__el">
        { React.createElement(c, { ...props }) }
      </div>
    </div>
  );
  return (
    <div className="elements">
      { componentsList }
    </div>
  );
}
