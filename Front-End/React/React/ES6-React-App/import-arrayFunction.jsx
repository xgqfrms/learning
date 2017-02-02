// import React from 'react';
// import ReactDOM from 'react-dom';


// variable & function  

const App = () => {
    let name = "React ❤ ES6";
    return (
        <p>
            Hello <mark>{name}</mark>!
        </p>
    );
}
const rootNode = document.getElementById('app');

ReactDOM.render(
    <App />, 
    rootNode
);

// <App name="React ❤ ES6" /> !== class/object  (name: "React ❤ ES6",)  
// <App /> === function/var  (let name = "React ❤ ES6";)  

/*
// class & props  

class HelloMessage extends React.Component {
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
    <HelloMessage name="xgqfrms-2017(react-jsx)" age="23" />, 
    document.getElementById('container')
);
*/
