/*
parent component & root DOM 

*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Profile from './child-profile';

const App = () => {
    let name = "React ❤ ES6";
    return (
        <div>
            <p>
                Hello <mark>{name}</mark>!
            </p>
            // <Profile avatar="https://cdn.xgqfrms.xyz/logo/favicon.png" name="React JSX ES6 webpack" />
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
