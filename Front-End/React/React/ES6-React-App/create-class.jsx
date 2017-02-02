var React = require('react');
var ReactDOM = require('react-dom');


var TonightsPlan = React.createClass({
    render: function () {
        var Plan;
        if (fiftyFifty) {
            Plan = "Tonight I'm going out WOOO"
        } else {
            Plan = "Tonight I'm going to bed WOOO"
        }
        return (
            <h1>{Plan}</h1>
        );
    }
});

ReactDOM.render(
    <TonightsPlan />,
    document.getElementById('app')
);

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
