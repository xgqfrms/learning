var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');

var Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
    changeName: function (newName) {
   // var name= this.state.name;
    this.setState({
      name: newName
    });
  },
  render: function () {
    return (
        <Child 
            name={this.state.name} onChange={this.changeName}/>
    );
  }
});

ReactDOM.render(
    <Parent />, 
    document.getElementById('app')
);
