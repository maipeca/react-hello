import React from 'react';

const HelloWorld4 = () => {
  const date = new Date().toLocaleString();

  return React.createElement(
    'div',
    null,
    React.createElement('p', null, 'Hello World'),
    React.createElement('p', null, ` ${date}`)
  );
};

export default HelloWorld4;
