import React from 'react';

const HelloWorld = () => {

    const timestamp = new Date(). toLocaleString();
    return <div>
        Hello, World! {timestamp}
    </div>
}
export default HelloWorld;