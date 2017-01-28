/*var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  talk: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button talk={this.talk} />;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
*/

// 像onClick之类的名称只创建事件监听器，如果它们用于类似于HTML的JSX元素。

// 否则，它们只是普通的(组件实例)prop名。

var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  handleClick: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button onClick={this.handleClick} />;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);









