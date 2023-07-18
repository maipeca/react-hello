import React from 'react';

const HelloWorldd = () => {
  const date = new Date().toLocaleString();

  return (
    <div>
      <p>Hello World {date}</p>
      <p></p>
    </div>
  );
};

export default HelloWorldd;
