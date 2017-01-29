# 2 Advanced React

https://www.codecademy.com/en/courses/react-102/lessons/style/exercises/advanced-react-intro?action=lesson_resume&link_content_target=interstitial_lesson



Style

Container Components From Presentational Components

Stateless Functional Components

PropTypes

React Forms



您将学习如何创建无状态功能组件，如何创建propType，如何编写表单以及如何使用样式。


您还将介绍您的第二种编程模式：将组件划分为表示组件/演示组件和容器组件。


## Style

在React中使用样式有很多不同的方法。本课主要关注其中一个：内联样式。


<h1 style={{ color: 'red' }}>Hello world</h1>

注意双花括号。这些是什么？

外部大括号将JavaScript注入JSX。他们说，“我们之间的一切都应该读为JavaScript，而不是JSX。 

内花括号创建一个JavaScript对象字面量。


如果你把一个对象字面量注入JSX，你的整个注入只是那个对象字面量，那么你最终会得到双花括号。

没有什么不寻常的，他们如何工作，但他们看起来很搞笑，可能会令人困惑。



var style = {
  color: 'darkcyan',
  background: 'mintcream'
};

在顶级作用域中定义一个名为style的变量在许多JavaScript环境中是一个非常糟糕的想法！
在React，但是，它是完全正常。


记住每个文件对于每个其他文件是不可见的，除了你选择通过module.exports公开。

您可以有100个不同的文件，全部使用名为style的全局变量，并且可能没有冲突。

es6 module

var styles = {
  background: 'lightblue',
  color:      'darkred'
}
var styleMe = <h1 style={styles}>Please style me!  I am so bland!</h1>;



css 连字符 - 小写：


var styles = {
  'margin-top':       "20px",
  'background-color': "green"
};

在React中，这些相同的名称改为camelCase：


var styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};


这对样式属性值只有在样式属性名上的影响为零。


在本练习中，您将了解React中的样式值与常规JavaScript中的样式值略有不同


常规JS中，样式值几乎总是字符串。
即使样式值是数字，您通常必须将其作为字符串写入，以便可以指定单位。例如，你必须写“450px”或“20％”。


在React中，如果您将样式值写为数字，则假定单位“px”。


{ fontSize: 30 }

{ fontSize: "2em" }

使用字符串指定“px”仍然可以工作，虽然它是多余的。

几个特定的​​样式不会为你自动填充“px”。
这些是你不太可能使用“px”的样式，所以你不必真正担心它。

https://facebook.github.io/react/docs/dom-elements.html


https://react2.xgqfrms.xyz/tips/style-props-value-px.html


## Container Components From Presentational Components

## Stateless Functional Components

## PropTypes

## React Forms











