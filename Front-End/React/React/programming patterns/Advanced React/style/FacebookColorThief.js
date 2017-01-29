var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('./facebookStyles');

var divStyle = {
  backgroundColor: styles.darkBlue,
  color:           styles.white
};

var Wow = React.createClass({
  render: function () {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
});

ReactDOM.render(
    <Wow />, 
    document.getElementById('app')
);
