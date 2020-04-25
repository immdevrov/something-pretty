import React from 'react';


function createCustomComponent (component, props) {
  return React.createElement(component, { ...props });
}

export default function RenderComponents ({ components }) {
  const componentsList = components.map(({ c, props, id, displayName }) =>
    <div className="elements__item" key={id}>
      <h3 className="elements__title">{ displayName }</h3>
      <div className="elements__el">
        {createCustomComponent(c, props)}
      </div>
    </div>
  );
  return (
    <div className="elements">
      {componentsList}
    </div>
  );
}
