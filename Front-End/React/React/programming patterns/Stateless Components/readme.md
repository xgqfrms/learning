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





















