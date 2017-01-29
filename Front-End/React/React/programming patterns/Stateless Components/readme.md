# Stateless Components Inherit From Stateful Components



编程模式


如果学习基本技能就像通过显微镜观看React应用程序，
那么学习编程模式就像去除显微镜并用肉眼查看应用程序。


我们的编程模式使用两个React组件：有状态组件和无状态组件。
“状态”描述任何具有getInitialState函数的组件; 
“无状态”描述任何没有的组件。

在我们的模式中，有状态组件将其状态传递到无状态组件。

我们将首先构建有状态类。

Parent.js

现在，让我们做无状态组件类。

Child.js 


你早先学到一个组件可以通过调用this.setState来改变它的状态。

你可能想知道：一个组件如何改变它的道具？


答案：它不！

组件不应更新this.props。


这是潜在的混乱。props 和 state存储动态信息。

根据定义,动态信息可以改变。如果一个组件不能改变它的props，那么什么是props呢？



## React组件 props 和 state 更改

React组件应使用 props 来存储可以更改的信息，但只能由其他组件更改。

React组件应该使用 state 来存储组件自身可以更改的信息。





Child Components Update Their Parents' state


无状态，子组件将更新父组件的状态。

父组件类定义了一个调用this.setState的函数。

一旦父类定义了更新其状态的函数，父类然后将该函数传递给子类。


孩子接收prop传递的函数，并将其用作事件处理程序。

当用户单击<button></ button>时，将触发点击事件。这将使得传递的函数被调用，这将更新父的状态。



要使子组件更新其父组件的状态，第一步是您之前看到的：您必须在父组件上定义一个状态更改函数。



<select id="great-names" onChange={this.props.onChange}>

this.props.onChange

此函数需要传递一个新名称作为参数，才能正常工作。


changeName: function (newName) {
  this.setState({
    name: newName
  });
}

当用户选择一个新的下拉项目时，它将调用changeName，但它不会传递正确的参数！
而不是传递一个新的名称，它将传递一个事件对象，所有事件监听器都做。


当在React中传递事件处理程序时，这是一个常见的问题！解决方案是定义另一个函数。



这个新函数应该将事件对象作为参数，从该事件对象中提取所需的名称，然后调用事件处理程序，传递提取的名称！


无状态组件更新他们父母的状态是一个React模式，你会看到越来越多。



为了使changeName工作，this.setState中的“this”必须是Parent类的指令对象。

您尝试设置<Parent />的状态，而不是某种其他类型的组件的状态。

当函数被调用时，而不是当函数被定义时，this 的含义被确定。


自动绑定允许您将函数作为prop传递，函数体中的任何this值将自动引用在定义函数时引用的任何值。没有约束的担心！


https://facebook.github.io/react/blog/2013/07/02/react-v0-4-autobind-by-default.html


Autobind 


http://bonsaiden.github.io/JavaScript-Garden/zh/
https://bonsaiden.github.io/JavaScript-Garden/#function.this


https://github.com/BonsaiDen/JavaScript-Garden/tree/master/doc/zh


https://www.codecademy.com/en/courses/react-102/lessons/child-updates-sibling/exercises/child-updates-sibling-intro?action=lesson_resume&link_content_target=interstitial_lesson


Child Components Update Their Siblings' props



有状态的父组件将事件处理程序传递给无状态的子组件。
然后子组件使用该事件处理程序来更新其父级的状态。


子组件更新其父级的状态，父级将该状态传递给同级/兄弟组件。









































