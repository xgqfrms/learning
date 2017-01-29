var React = require('react');

var styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

var StyledClass = React.createClass({
  render: function () {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
});

module.exports = StyledClass;
