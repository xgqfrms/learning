# ES6 Classes

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes

## MDN


https://gist.github.com/xgqfrms-GitHub/9615860ca40d4b309e3355014171d52c


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla

https://github.com/lukehoban/es6features

https://lightrains.com/blogs/es6


http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions



```js
ECMAScript 2015 中引入的 JavaScript 类主要是 JavaScript 现有的基于原型的继承的语法糖。 类语法不是向JavaScript引入一个新的面向对象的继承模型。JJavaScript类提供了一个更简单和更清晰的语法来创建对象并处理继承。

定义类
类实际上是个“特殊的函数”，而正如可以定义函数表达式和函数声明一样，类语法有两个组件：类表达式和类声明。

类声明

定义一个类的一种方法是使用一个类声明。要声明一个类，你可以使用带有class关键字的类名（这里是“Rectangle”）。

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
提升

函数声明和类声明之间的一个重要区别是函数声明是hoisted，类声明不会。你首先需要声明你的类，然后访问它，否则像下面的代码会抛出一个ReferenceError：

let p = new Rectangle(); 

// ReferenceError

class Rectangle {}
类表达式

一个类表达式是定义一个类的另一种方式。类表达式可以是被命名的或匿名的。赋予一个命名类表达式的名称是类的主体的本地名称。

/* 匿名类 */ 
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/* 命名的类 */ 
let Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
注意: 类表达式也受到类声明中提到的同样提升问题的困扰。

类体和方法定义
一个类的类体是一对花括号/大括号 {} 中的部分。这是你定义类成员的位置，如方法或构造函数。

严格模式

类声明和类表达式的主体都执行在严格模式下。

构造函数

构造函数方法是一个特殊的方法，其用于创建和初始化使用一个类创建的一个对象。一个类只能拥有一个名为 “constructor”的特殊方法。如果类包含多个构造函数的方法，则将抛出 一个SyntaxError 。

一个构造函数可以使用 super 关键字来调用一个父类的构造函数。

原型方法

参见方法定义。

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  } 
  get area() {
    return this.calcArea()
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.area);
// 100
静态方法

static 关键字用来定义一个类的一个静态方法。调用静态方法而不实例化其类，不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
```
