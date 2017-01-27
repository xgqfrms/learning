var React = require('react');

var Example = React.createClass({

  handleEvent: function () {
    alert('I am an event handler.'
    + '  If you see this message,'
    + ' then I have been called.');
  },

  render: function () {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
});
