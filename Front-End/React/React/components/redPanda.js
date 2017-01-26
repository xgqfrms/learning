var React = require('react');
var ReactDOM = require('react-dom');

var redPanda = {
  src: 'http://bit.ly/1U92LL3',
  alt: 'Red Panda',
  width:  '200px'
};

var RedPanda = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src} 
          alt={redPanda.alt} 
          width={redPanda.width} />
      </div>
    );
  }
});

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);
