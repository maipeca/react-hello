import React from 'react';

const HelloWorl = (props) => {
  const timestamp = new Date().toLocaleString();
  return <div>Hello, {props.name}!{timestamp}</div>;
}

export default HelloWorl;
