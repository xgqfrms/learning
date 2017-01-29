var React = require('react');
var ReactDOM = require('react-dom');

var ChildClass = React.createClass({
  render: function () {
    return (

      // The stateless component class uses 
      // the passed-down handleClick function, 
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
});

module.exports = ChildClass;
