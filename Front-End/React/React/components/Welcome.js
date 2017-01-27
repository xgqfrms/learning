var React = require('react');

var Welcome = React.createClass({
  render: function () {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
        <h2>
          hello sir it is truly great to meet you here on the web
        </h2>
      );
    } else {
      return (
        <h2>
          WELCOME "2" MY WEB SITE BABYYY!!!!!
        </h2>
      );
    }
  }
});

module.exports = Welcome;
