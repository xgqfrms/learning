var React = require('react');
var ReactDOM = require('react-dom');

var Mood = React.createClass({
  getInitialState: function () {
    return {
      mood: 'good'    
    };
  },

  toggleMood: function () {
    var newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  },

  render: function () {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Mood />, document.getElementById('app'));
