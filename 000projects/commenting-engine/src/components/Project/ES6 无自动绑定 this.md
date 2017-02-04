# ES6 无自动绑定 this 


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

http://react2.xgqfrms.xyz/docs/reusable-components.html

React & ES6 无自动绑定 ??? 

.bind(this)

=> 


http://react2.xgqfrms.xyz/docs/reusable-components.html#无自动绑定

## 无自动绑定

class eextends React.Component 方法遵循正式的ES6 class的语义，意味着它们不会自动绑定this到实例上。

你必须显示的使用.bind(this) or 箭头函数 =>：

// 你可以使用 bind() 来绑定 `this`
<div onClick={this.tick.bind(this)}>

// 或者你可以使用箭头函数
<div onClick={() => this.tick()}>
我们建议你在构造函数中绑定事件处理器，这样对于所有实例它们只需绑定一次：

constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
}
现在你可以直接使用 this.tick 因为它已经在构造函数里绑定过一次了。

// 它已经在构造函数里绑定过了
<div onClick={this.tick}>
这对应用的性能有帮助，特别是当你用 浅层比较 实现 shouldComponentUpdate() 时。

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


















