/*
parent component & root DOM 

*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Profile from './child-profile';

// npm error : Uncaught ReferenceError: require is not defined

// import LikeButton from './like-unlike'
// var LikeButton = require('./like-unlike');
// /*<LikeButton /> ??? React JSX comment ??? */

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
            <hr/>
            <br/>
            {
                /*
                <mark>??? React JSX comment ???</mark>
                http://react2.xgqfrms.xyz/docs/jsx-in-depth.html
                <LikeButton />
                */
                /*
                JSX 里添加注释很容易；它们只是 JS 表达式而已。
                你仅仅需要小心的是当你在一个标签的子节点块时，要用 {} 包围要注释的部分。
                */
            }
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
