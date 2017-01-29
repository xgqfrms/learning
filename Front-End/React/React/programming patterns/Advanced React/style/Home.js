var React = require('react');
var ReactDOM = require('react-dom');
var AttentionGrabber = require('./AttentionGrabber');
var styles = require('./styles');

var divStyle = {
  background: styles.background,
  height:     '100%' 
};

var Home = React.createClass({
  render: function () {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
});

ReactDOM.render(
    <Home />, 
    document.getElementById('app')
);
