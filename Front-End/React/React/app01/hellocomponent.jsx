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


/*

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
    React.createElement(HelloMessage, { name: "xgqfrms" }),
    document.getElementById('container')
);

*/
