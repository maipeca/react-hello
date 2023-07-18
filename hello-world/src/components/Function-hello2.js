import React from 'react';

function HelloWorld() {
  const date = new Date().toLocaleString();

  return (
    <div>
      <p>Hello World</p>
      <p>Fecha y hora: {date}</p>
    </div>
  );
}

export default HelloWorld;
