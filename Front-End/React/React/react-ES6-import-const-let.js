/*
var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./Greeting');

var App = React.createClass({
    getInitialState: function () {
        return { title: 'Best App' }
    },
    render: function () {
        return (
            <div>
                <h1>
                    Hullo and, "Welcome to The Newzz," "On Line!"
                </h1>
                <Greeting name="xgqfrms" signedIn={true}/>
                <article>
                    Latest newzz:  where is my phone?
                </article>
            </div>
        );
    }
});

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);

*/

import React from 'react';
import ReactDOM from 'react-dom';


let HelloWorld = React.createClass({
    render: function () {
        return (
            <h1>Hello, world!</h1>
        );
    }
});

let HelloWorld = React.createClass({
    render: () => {
        return (
            <h1>Hello, world!</h1>
        );
    }
});


let HelloWorld = "<h1>Hello, world!</h1>";
const exampleElement = document.getElementById('example');

ReactDOM.render(
    <HelloWorld />, 
    exampleElement
);


/*

// JSX & babel

class HelloMessage extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="xgqfrms" />, 
    document.getElementById('container')
);


// JS

class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "h1",
            null,
            "Hello ",
            this.props.name
        );
    }
}

ReactDOM.render(
    React.createElement(HelloMessage, { name: "xgqfrms" }),
    document.getElementById('container')
);

*/
