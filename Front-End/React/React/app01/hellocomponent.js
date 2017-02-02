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

*/

// JS  
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hello ",
                this.props.name
            )
        );
    }
}
ReactDOM.render(
    React.createElement(HelloMessage, { name: "xgqfrms-2017(react-js)" }),
    document.getElementById('container')
);


/*

 

    null,
    React.createElement(
        "h1",
        null,
        "Hello ",
        this.props.name
    )

this.props.name ? props 

null ? attributes object : null 


// Input (JSX):
var app = <Nav color="blue" />;


// Output (JS):
var app = React.createElement(Nav, {color:"blue"});

// Input (JSX):
var app = <h1 color="blue"> H1 <h1/>;


// Output (JS):
var app = React.createElement(
    "h1", 
    {color:"blue"},
    " H1 "
);

???  https://babeljs.io/repl/ 

null ? attributes object : null 


*/


