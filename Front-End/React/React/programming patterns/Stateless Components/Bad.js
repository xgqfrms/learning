var React = require('react');

var Bad = React.createClass({
  render: function () {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
});
