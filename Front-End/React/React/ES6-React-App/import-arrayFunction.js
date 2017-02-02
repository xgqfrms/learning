import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (<p>Hello World!</p>);
}

const exampleNode = document.getElementById('example');
ReactDOM.render(<App />, exampleNode);
