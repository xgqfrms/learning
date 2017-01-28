# component props  



https://facebook.github.io/react/docs/components-and-props.html

Components and Props

https://facebook.github.io/react/docs/state-and-lifecycle.html

State and Lifecycle





组件的props是一个对象。它保存有关该组件的信息。


this.props


render: function () {
    console.log("Props object comin' up!");
    console.log(this.props);
    console.log("That was my props object!");
    return <h1>Hello world</h1>;
}



this.props中的大部分信息是相当无用的！但有些是非常重要的。


##  component attribute

<Greeting firstName='xgqfrms' />

## component display passed-in information


{this.props.firstName}


pass a prop from one component to another.



props是存储传入信息的对象的名称。 this.props指的是存储对象。


同时，每条传入的信息也称为prop。
props可以引用两条传入的信息，或者它可以引用存储这些信息的对象


<h1 onClick={this.handleEvent}>
    Hello world
</h1>

## event handler


<Button talk={this.talk} />


π

<button onClick={this.props.talk}>
    Click me!
</button>


当你传递一个事件处理程序作为prop，就像你刚才做的，有两个名称，你必须选择


https://www.codecademy.com/courses/react-101/lessons/this-props/exercises/handleevent-onevent-props-event

在这里，当给出<Button />一个名为onClick的属性时，名称onClick不做任何特殊的。名称onClick不会在<Button />上使用时创建事件侦听器 - 它只是一个任意的属性名称：

原因是在<Button />不是一个类似HTML的JSX元素;它是一个组件实例


像onClick之类的名称只创建事件监听器，如果它们用于类似于HTML的JSX元素。

否则，它们只是普通的(组件实例)prop名。





## this.props.children

每个组件的props对象都有一个名为children的属性。

this.props.children将返回组件的打开和关闭JSX标记之间的所有内容。


self-closing tags



如果一个组件在其JSX标记之间有多个子元素，那么this.props.children将返回数组中的那些子元素。


但是，如果组件只有一个子节点，则this.props.children将返回单个子节点，而不是包含在数组中。



## default message 


getDefaultProps

getDefaultProps函数应该返回一个对象：


var Example = React.createClass({
  getDefaultProps: function () {
    // Return an object:
    return { text: 'yo' };
  },
  render: function () {
    return <h1>{this.props.text}</h1>;
  }
});

在这个返回的对象内，写入您要设置的任何默认props的属性：



props is quite possibly the longest and most difficult lesson in all of our React courses. Congratulations on getting this far!

props 很可能是我们所有的React课程中最长和最困难的课程。恭喜你得到这么远！

## props skills:

Passing a prop by giving an attribute to a component instance

Accessing a passed-in prop via this.props.prop-name

Displaying a prop

Using a prop to make decisions about what to display

Defining an event handler in a component class

Passing an event handler as a prop

Receiving a prop event handler and attaching it to an event listener

Naming event handlers and event handler attributes according to convention

this.props.children

getDefaultProps













