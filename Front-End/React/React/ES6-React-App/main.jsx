/*
parent component & root DOM 

*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Profile from './child-profile';

// npm error : Uncaught ReferenceError: require is not defined

// import LikeButton from './like-unlike'
//var LikeButton = require('./like-unlike');

// <Profile avatar="https://cdn.xgqfrms.xyz/logo/favicon.png" name="React JSX ES6 webpack" />

const App = () => {
    let name = "React ❤ ES6";
    return (
        <div>
            <p>
                <h1>
                    Hello <mark>{name}</mark>!
                </h1>
            </p>
            <span>
                <mark>Profile</mark> ❤ placeholder!
            </span>
            <LikeButton />
        </div>
    );
}
const rootNode = document.getElementById('app');

ReactDOM.render(
    <App />, 
    rootNode
);


/*

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Hello <mark>{this.props.name}</mark>
                </h1>
                <h2> Age : {this.props.age}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App name="xgqfrms-2017(react-jsx)" age="23" />, 
    document.getElementById('container')
);

*/
