var React = require('react');
var ReactDOM = require('react-dom');

var MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});

ReactDOM.render(
    <MyComponentClass />, 
    document.getElementById('app')
);


/*

var React = require('react');
var ReactDOM = require('react-dom');

var instructions = {
  render: function () {
    return <h1>Hello world & instructions</h1>;
  }
};

var MyComponentClass = React.createClass(new instructions);

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('container')
);

*/
