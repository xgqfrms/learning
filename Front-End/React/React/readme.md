# React  

https://www.packtpub.com/mapt/history 


F:\Books\React-all-in-one  



## error (browser.min.js )

https://github.com/xgqfrms007/test/issues/1

## OK (babel-standalone)  



error:  

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js" integrity="sha256-zSpX/F9KKuk1nLBq2vygsdDm6QrSbVdn5lteMkdzWdk=" crossorigin="anonymous"></script> 

OK:  

https://unpkg.com/babel-standalone@6.15.0/babel.min.js  
https://cdnjs.com/libraries/babel-standalone  

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.0/babel.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.0/babel.min.js" integrity="sha256-YXgKpPGTUUui8cJMq3LCqmBR7jMJCbjLjlhpqhFU3E0=" crossorigin="anonymous"></script>



## HTML 标签对比 React 组件

http://react2.xgqfrms.xyz/docs/jsx-in-depth.html



React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)。

要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。

var myDivElement = <div className="foo" />;

ReactDOM.render(myDivElement, document.getElementById('example'));


要渲染 React 组件，只需创建一个大写字母开头的本地变量。

var MyComponent = React.createClass({/*...*/});

var myElement = <MyComponent someProperty={true} />;

ReactDOM.render(myElement, document.getElementById('example'));

React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。




