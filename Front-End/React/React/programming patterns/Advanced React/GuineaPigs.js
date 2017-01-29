var React = require('react');
var ReactDOM = require('react-dom');

var GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

var GuineaPigs = React.createClass({
  getInitialState: function () {
    return { currentGP: 0 };
  },

  nextGP: function () {
    var current = this.state.currentGP;
    var next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  },

  interval: null,

  componentDidMount: function () {
    this.interval = setInterval(this.nextGP, 5000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    var src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
});

ReactDOM.render(
  <GuineaPigs />, 
  document.getElementById('app')
);
