var React = require('react');
var ReactDOM = require('react-dom');


var Child = React.createClass({
  render: function () {
        return(
            <div>
                <h1>Hey, my name is {this.props.name}!</h1>
            </div>
        );
    }
});

module.exports = Child;
