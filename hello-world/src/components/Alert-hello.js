import React from 'react';

const HelloWorldalert = () => {
  
  function sayHello() {
    const dates = new Date().toLocaleString();
    alert('Hello, World!');
  }
  
  return (
    <button onClick={sayHello}>Click me, hello world!</button>
  );
};

export default HelloWorldalert;