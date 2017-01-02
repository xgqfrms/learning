/*
https://facebook.github.io/react/
https://facebook.github.io/react/docs/jsx-in-depth.html
https://react2.webgeeker.xyz/docs/jsx-in-depth.html
https://react2.webgeeker.xyz/docs/getting-started.html
https://jsfiddle.net/reactjs/69z2wepo/
*/

/* 01 Component */

var MyComponent = React.createClass({
    render() {
    return (
      <div className="commentBox">
        Hello, world! <br/>
        <mark>I am a CommentBox component.</mark>
      </div>
    );
  }
});

ReactDOM.render(<MyComponent someProperty={true} />, document.getElementById('container'));

/* 02 var Component */

var MyComponent = React.createClass({
    render() {
    return (
      <div className="commentBox">
        Hello, world! <br/>
        <mark>I am a CommentBox component.</mark>
      </div>
    );
  }
});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('container'));

/* render: function() */

var Hello1 = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello1 name="render: function()" />,
  document.getElementById('container1')
);

/* render() */

var Hello = React.createClass({
  render() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="render()" />,
  document.getElementById('container')
);
