import React, { Component } from 'react';

class Hello extends Component {
  render() {
    const timestamp = new Date().toLocaleString();
    return <div>Hello, World!{timestamp}</div>;
  }
}

export default Hello;

