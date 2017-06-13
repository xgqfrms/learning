// .__proto__


/*

## Object.prototype

https://www.w3schools.com/js/js_object_prototypes.asp

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype



## Object.prototype.__proto__


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

> Object.prototype.__proto__ 指向当对象被实例化的时候，用作原型的对象。





Object.prototype 的 __proto__  属性是一个访问器属性（一个getter函数和一个setter函数）, 暴露了通过它访问的对象的内部[[Prototype]] (一个对象或 null)。

使用__proto__是有争议的，而且是不鼓励的。 它从来没有被包括在EcmaScript语言规范中，但是现代浏览器实现了它, 无论如何。__proto__属性已在ECMAScript 6语言规范中标准化，用于确保Web浏览器的兼容性，因此它未来将被支持。它已被弃用, 赞成Object.getPrototypeOf/Reflect.getPrototypeOf 和Object.setPrototypeOf/Reflect.setPrototypeOf（尽管如此，设置对象的[[Prototype]]是一个缓慢的操作，如果性能是一个问题，应该避免）。

__proto__ 属性也可以在对象文字定义中使用对象[[Prototype]]来创建，作为Object.create() 的一个替代。 请参阅： object initializer / literal syntax.


## inheritance & prototype_chain


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain



对于有基于类的语言经验的开发人员来说, JavaScript 有点令人困惑 (如Java或C ++) ，因为它是动态的，并且本身不提供一个类实现.。(在ES2015/ES6中引入了class关键字，但只是语法糖，JavaScript 仍然是基于原型的)。

当谈到继承时，Javascript 只有一种结构：对象。每个对象都有一个私有属性(称为是[[Prototype]]), 它持有一个连接到另一个称为其 prototype 对象的链接。该原型对象具有一个自己的原型，等等，直到达到一个对象的 prototype 为 null。

根据定义，null 没有 prototype，并作为这个 prototype chain 中的最后一个环节。

虽然这通常被认为是JavaScript的弱点之一，但是原型继承模型实际上比经典模型更强大。

虽然，原型继承经常被视作 JavaScript 的一个弱点，但事实上，原型继承模型比经典的继承模型更强大。

例如，在一个原型模型之上构建一个经典模型是相当微不足道的。




## js prototype chain

https://community.risingstack.com/javascript-prototype-chain-inheritance/

https://community.risingstack.com/explaining-javascript-closure-scope-chain-examples/



https://wildlyinaccurate.com/understanding-javascript-inheritance-and-the-prototype-chain/






http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/

http://javascriptissexy.com/javascript-objects-in-detail/


http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/

http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/


# Object.create()


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create


> Object.create() 方法使用指定的原型对象和其属性创建了一个新的对象。








# Object.create()



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

> Object.getPrototypeOf() 方法返回指定对象的原型（即, 内部[[Prototype]]属性的值）。





*/













































