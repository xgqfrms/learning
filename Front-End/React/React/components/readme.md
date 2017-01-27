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



指令对象 instructions object

React.createClass接受一个参数。该参数必须是JavaScript对象。此对象将充当一组指令，向您的组件类说明如何构建React组件。


https://react2.xgqfrms.xyz/docs/getting-started.html

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

var componentBlueprint = {
    render: function () {
        return <h1>Hello world & instructions object </h1>;
    }
};
var MyComponentClass = React.createClass(componentBlueprint);

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('root')
);





http://codepen.io/xgqfrms/pen/LxzpoP


https://facebook.github.io/react/tutorial/tutorial.html


class


export

https://facebook.github.io/react/docs/installation.html


http://github.com/facebookincubator/create-react-app



<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>

<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

type="text/babel"

https://facebook.github.io/react/downloads/single-file-example.html




// electronic clock


function tick() {
    const localTime = new Date().toLocaleTimeString();
    console.log(`localTime = ${localTime}`);
    let clock = document.getElementById("clock");
    clock.innerHTML=`localTime = ${localTime}`;
}


setInterval(tick, 1000);


## (多行JSX表达式)  



return <h1>Hello world</h1>;

然而，多行JSX表达式应该总是包裹在括号中！


return (
    <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
            <a target="_blank" href="http://bit.ly/1WGzM4G">
                Douglas Huebler
            </a>
        </cite>
    </blockquote>
);

## JavaScript object

var redPanda = {
    src: 'http://bit.ly/1U92LL3',
    alt: 'Red Panda',
    width:  '200px
};

## 组件渲染前的简单计算

渲染函数也可以是一个很好的地方，
放置需要在组件渲染之前发生的简单计算。

var Random = React.createClass({
    // This should be in the render function:
    var n = Math.floor(Math.random()*10+1);
    render: function () {
        return <h1>The number is {n}!</h1>;
    }
});















