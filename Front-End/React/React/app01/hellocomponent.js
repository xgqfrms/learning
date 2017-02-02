/*
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
    React.createElement(HelloMessage, { name: "xgqfrms-2017" }),
    document.getElementById('container')
);

/*
// babel-react-jsx-to-js
    null,
    React.createElement(
        "h1",
        null,
        "Hello ",
        this.props.name
    )

*/
