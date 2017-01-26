# Component  



https://www.codecademy.com/courses/react-101/lessons/your-first-react-component/exercises/hello-world-component?action=lesson_resume




## React (JavaScript object)

var React = require('react');


React.createElement()

React.createClass()

## React-DOM (JavaScript object)

var ReactDOM = require('react-dom');

ReactDOM.render()


每个组件必须来自一个组件类。

组件类就像一个创建组件的工厂。
如果你有一个组件类，那么你可以使用该类生成任意多的组件。

component class 


组件类变量名称必须以大写字母开头！


https://en.wikipedia.org/wiki/Naming_convention_(programming)#Java

命名约定


组件类不是组件 - 它更像是一个生产组件的工厂。

每个组件必须来自一个组件类。


驼峰命名
UpperCamelCase
Uppercase nomenclature

指令对象

React.createClass接受一个参数。该参数必须是JavaScript对象。此对象将充当一组指令，向您的组件类说明如何构建React组件。


https://react2.xgqfrms.xyz/docs/getting-started.html

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);


