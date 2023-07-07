import React, { useState } from 'react';

const ElloWorld = () => {
  const [name] = useState('World');
  const timestamp = new Date().toLocaleString();
  return <div>Hello, {name}! {timestamp}</div>;
}

export default ElloWorld;
