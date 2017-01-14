```copyright

作者：xgqfrms
链接：https://zhuanlan.zhihu.com/p/24884853
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

``` 
# Optimizing JavaScript code

定义类方法

以下是低效的，因为每次构建baz.Bar的实例时，都会为foo创建一个新函数和闭包：

baz.Bar = function() {
  // constructor body
  this.foo = function() {
    // method body
  };
}
首选方法是：

baz.Bar = function() {
  // constructor body
};

baz.Bar.prototype.foo = function() {
  // method body
};
使用这种方法，无论构建多少个baz.Bar实例，都只会为foo创建一个函数，并且不会创建闭包。

初始化实例变量

将实例变量声明/初始化放在具有值类型（而不是引用类型）初始值的实例变量的原型上(i.e. values of type number, Boolean, null, undefined, or string)

（即, 类型是 number, Boolean, null, undefined, 或 string的值）

ES 6: Symbol ???

这避免了每次调用构造函数时不必要地运行初始化代码。(对于初始值依赖于构造函数的参数的实例变量，或者构造时的某个其他状态，不能这样做。)

例如，代替

foo.Bar = function() {
  this.prop1_ = 4;
  this.prop2_ = true;
  this.prop3_ = [];
  this.prop4_ = 'blah';
};
使用：

foo.Bar = function() {
  this.prop3_ = [];
};
foo.Bar.prototype.prop1_ = 4;
foo.Bar.prototype.prop2_ = true;
foo.Bar.prototype.prop4_ = 'blah';
避免闭包的陷阱

闭包是JavaScript的一个强大而有用的特性;然而，它们有几个缺点，包括：

它们是内存泄漏的最常见的来源。
创建闭包比创建没有闭包的内部函数慢得多，并且比重用静态函数慢得多。
例如：

function setupAlertTimeout() {
  var msg = 'Message to alert';
  window.setTimeout(function() { alert(msg); }, 100);
}
慢于：

function setupAlertTimeout() {
  window.setTimeout(function() {
    var msg = 'Message to alert';
    alert(msg);
  }, 100);
}
其慢于：

function alertMsg() {
  var msg = 'Message to alert';
  alert(msg);
}

function setupAlertTimeout() {
  window.setTimeout(alertMsg, 100);
}
它们向作用域链添加级别。当浏览器解析属性时，必须检查作用域链的每个级别。在以下示例中：

var a = 'a';

function createFunctionWithClosure() {
  var b = 'b';
  return function () {
    var c = 'c';
    a;
    b;
    c;
  };
}

var f = createFunctionWithClosure();
f();
当调用f时，引用a比引用b慢，这比引用c慢。

有关何时使用闭包与IE的信息的, 请参阅IE + JScript性能建议第3部分：JavaScript代码效率低下 。

避免使用 with

避免在代码中使用 with 。它对性能有负面影响，因为它修改了作用域链，使得在其他作用域中查找变量更加昂贵。

Avoiding browser memory leaks

内存泄漏是Web应用程序的一个常见的问题，可能导致巨大的性能损失。随着浏览器的内存使用量的增长，您的Web应用程序以及用户系统的其余部分会减慢。

Web应用程序最常见的内存泄漏包括JavaScript脚本引擎和浏览器的C ++对象实现DOM之间的循环引用 ( 例如JavaScript脚本引擎和Internet Explorer的COM基础结构之间，或JavaScript引擎和Firefox XPCOM基础结构之间 )。

下面是一些避免内存泄漏的经验法则：

使用事件系统附加事件处理程序

最常见的循环引用模式[DOM元素 - >事件处理程序 - >闭包范围 - > DOM]元素在MSDN博客文章中讨论。要避免此问题，请使用经过良好测试的事件系统之一来附加事件处理程序，例如Google doctype，Dojo 或 JQuery 中的事件处理程序。

此外，使用内联事件处理程序可能导致在IE中的另一种类型的泄漏。这不是常见的循环引用类型泄漏，而是内部临时匿名脚本对象的泄漏。有关详细信息，请参阅“DOM插入顺序泄漏模型”一节在了解和解决Internet Explorer漏洞模式和一个例子在这个JavaScript工具包教程。

避免使用expando属性

Expando属性是DOM元素的任意JavaScript属性，是循环引用的常见来源。你可以使用expando属性而不引入内存泄漏，但是很容易偶然引入。这里的泄漏模式是[DOM元素 - >通过expando - >中间对象 - > DOM元素]。最好的办法是避免使用它们。如果您确实使用它们，则只能使用带有基本类型的值。如果确实使用非原始值，则在不再需要expando属性时将其取消。请参阅了解和解决Internet Explorer泄漏模式中的“循环引用”一节。