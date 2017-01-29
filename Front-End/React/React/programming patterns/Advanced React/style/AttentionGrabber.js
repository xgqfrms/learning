var React = require('react');
var styles = require('./styles');

var h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};

var AttentionGrabber = React.createClass({
    render: function () {
        return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
    }
});

module.exports = AttentionGrabber;
