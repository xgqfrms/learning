## 构造 jQuery 对象

jQuery 对象是一个类数组对象，有连续的整型属性、`length` 属性和大量的 jQuery 方法。它由构造函数 `jQuery()` 创建，简写`$()`。

### jQuery 构造函数

###### `jQuery(selector[, context])`

传入选择器及可选的上下文，jQuery 会根据上下文或者 `document` 查找匹配的 DOM 元素，找到则返回一个包含了匹配元素的 jQuery 对象。没有匹配元素那么会返回一个空的 jQuery 对象，`length` 为 0。因此判断 jQuery 对象是否为空，并不是与 `null` 进行比较，而是看 `length` 是否为 0。

###### `jQuery(html[, ownerDocument])`

和上面的一样，同样是传入一个字符串参数，jQuery 会判断这个字符串参数是选择器还是 HTML 代码，然后进行不同的处理。如果第一个参数时单个标签，那么会使用 `document.createElement` 来创建一个 DOM 元素，否则会利用 `innerHTML` 的机制来创建 DOM 元素。第二个参数表示新创建 DOM 元素的文档对象，默认为当前文档。

###### `jQuery(html, props)`

这个方法实际上是和上面方法类似的，第一个参数时单个标签时，第二个参数可以使一组属性值，然后由 `attr` 方法把属性和事件设置到新创建的 DOM 元素上。

###### `jQuery(element)`、`jQuery(elementArray)`

传入 DOM 元素或则元素数组，封装到 jQuery 对象中并返回。常用于事件监听中把 `this` 分装成 jQuery 对象。

###### `jQuery(object)`

传入普通的 js 对象，分装到 jQuery 对象中返回。可以方便地在普通 js 对象上实现自定义事件的绑定和触发。

###### `jQuery(callback)`

`callback` 绑定为 `ready` 事件的一个监听函数，当 DOM 解析完成时，会触发 `ready` 事件，然后调用这个监听函数。

> 原本 `ready` 指得是 `DOMContentLoaded` 事件，但是对于 IE 6、7、8，jQuery 使用 `readyStateChange` 来进行兼容，IE 11 弃用了 `readyStateChange` ，jQuery 使用 `doScroll` 来进行兼容。因此此处的 `ready` 本质上是这三种兼容方式的统称。

###### `jQuery(jQuery object)`

创建一个副本返回，两者引用的是同一个 DOM 元素。

###### `jQuery()`

返回一个空的 jQuery 对象，`length` 为 0。

### jQuery 无 `new` 构建实例的实现

```
var jQuery = function( selector, context ) {
		// 实际上是在内部用 new 调用了另一个构造函数
		return new jQuery.fn.init( selector, context, rootjQuery );
	}
jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		// ...
	},
	...
}
// 通过覆盖原型的方式，把 jQuery.prototype 覆盖到 jQuery.fn.init.prototype 上
jQuery.fn.init.prototype = jQuery.fn;
// ...
```

###### 为什么要无 `new` 构造 ？

个人认为比较简洁吧。underscore 也选择的是无 `new` 构造对象。

###### 为什么要有 `jQuery.fn` ？

比起 `prototype` 省了 7 个字符。

###### 为什么使用 `jQuery.fn.init` 创建的对象能够访问到 jQuery.prototype 上的属性和方法？

`jQuery.fn.init.prototype = jQuery.fn;` 将真正的构造函数 `jQuery.fn.init` 的原型设为了 `jQuery.fn` 也就是 `jQuery.prototype`。

### `jQuery.fn.init(selector, context, rootjQuery)`

看了上一小节，我们知道了 jQuery 实际是调用 `jQuery.fn.init` 构造的对象，接下来分析 `jQuery.fn.init` 来看看它是如何实现第一小节讲到的 7 种构造函数的。代码有点长，不贴了，把处理的分支写一下：

1. `selector` 可以转换为 `false`：`$("")`、`$(null)`、`$(undefined)`、`$(false)`，直接返回 `this`，即空的 jQuery 对象。
2. `selector` 是字符串。
 1. 如果开头是 `<` 结尾是 `>` 并且长度大于等于 3，jQuery 默认它是 HTML。此时 `match = [null, selector, null]`，当然这种检验不能保证正确性，如 `<div><p>`
 2. 否则 `/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/` 正则来对 `selector` 进行检验。这个正则捕获两个分组，前一个分组是 `<**>` 的格式，为 HTML，第二个分组是匹配 `#id` 的格式。因此正则表达式执行 `exec` 的结果前三项就为 `selector`、HTML 捕获分组、`#id` 捕获分组。
 3. 如果是 HTML，`jQuery.merge(this, jQuery.parseHTML)`。
     1. `jQuery.parseHTML` 中判断为单个标签，那么用 `docuemnt.createElement` 创建并返回。
     2. 否则，用 `jQuery.buildFragment` 来创建返回。
     3. `context` 是一个普通对象，那么把它当做属性数组，添加属性或事件到新建元素上。
 4. 如果是 `#id`，没有指定 `context`，用 `getElementById` 获取元素，设置 `this.context` 为 `document`。
 5. 如果 `selector` 是选择器表达式。
     1. 如果指定了 `context`，`return this.constructor( context ).find( selector );`。
     2. 否则，`return ( context || rootjQuery ).find( selector );`。
3. `selector` 是 DOM 元素，设置第一个元素及 `context` 属性为该 DOM 元素，`length` 为 1。 
4. `selector` 是函数：`return rootjQuery.ready(selector);`。
5. `selector` 是 jQuery 对象，把 `selector`、`context` 设置给 `this`，在后面的 `return jQuery.makeArray(selector, this)` 中会把包含的元素复制到当前的 jQuery 对象中。
6. 其它任意类型值：`return jQuery.makeArray(selector, this)`。

### `jQuery.buildFragment(elems, context, scripts, selection)`

复杂 HTML 创建 jQuery 对象时利用 `jQuery.buildFragment` 来将 HTML 字符串转化为 DOM，本小节的内容就是阅读这个方法是如何实现的。书上的 1.7.1 版本中描述了 `jQuery.buildFragment` 和 `jQuery.clean` 两个方法，但是在 1.10.1 中 `jQuery.buildFragment` 已经把 `jQuery.clean` 合并了进来。

1. `createSafeFragment(context)` 内部调用 `document.createFragment` 创建文档片段，并创建 `nodeNames` 中包含的 HTML5 元素，这种文档片段叫做安全文档片段。IE 9 一下不支持 HTML5，但是解决这个问题有一个莫名其妙的办法，就是预先调用 `document.createElement('未知标签')`，之后浏览器就会正确解析和渲染这个标签。这也就是这里这么做的原因。
2. 遍历等待转换的 HTML 代码数组
 1. 如果是对象，则直接 `merge` 进 `nodes`。
 2. 如果代码中不包含标签、字符代码、数字代码，那么 `document.createTextNode` 创建文本节点，插入 `nodes`。
 3. 否则就当做 HTML 进行处理。
     1. 如果 `tmp` 不存在，创建一个 `div` 插入并赋值给 `tmp`。
     2. 提取标签，然后从 `wrapMap` 中获取需要包裹的标签，这是针对 `option`、`legend` 等需要包括的元素来做的。
     3. `tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];` 通过 `innerHTML` 将包裹后的字符串转换成 DOM 子树。此处 `rxhtmlTag` 正则的作用是修正自关闭标签，例如 `<div/>` 会被修正为 `<div></div>`。
     4. 上一步的 `wrap[1]` 和 `wrap[2]` 分别为包裹的父标签和闭合父标签，而 `wrap[0]` 表示的是包裹的层级，这一部做的就是从包裹的层级中取出我们正则需要的 DOM 内容。
     5. 手动加入被 IE 6-8 剔除的前导空白文本。
     6. 移除 IE 6/7 自动插入的空 `tbody` 标签。
     7. 将 `tmp` 的 `childNodes` 都合并进 `nodes`。
     8. 清除 `tmp` 的子元素。
     9. `tmp` 指向安全文档片段的 `lastChild`。
 4. 在安全文档片段上清除 `tmp`。
 5. 修正 IE 6/7 复选框、单选框的选中状态丢失问题。
 6. 遍历 `nodes`，提取 `script` 存入 `scripts`，其它的插入安全文档片段。
 7. 最后返回安全文档片段。

还是挺复杂的，这里再理一理，首先因为 `documentFragment` 不支持 `innerHTML` 因此需要创建一个临时的 `div` 来调用 `innerHTML`。这个过程中涉及了包裹，还有自闭合的处理。此后，临时的 `div` 事实上不需要了，就先剥掉这层壳，然后处理 IE 下的一些问题，最后把新建的元素添加到 `nodes`。然后才是把 `nodes` 上的元素添加到安全文档片段上返回。不过对于 `script` 是单独存到 `scripts` 变量中的。

### `jQuery.extend()`、`jQuery.fn.extend()`

用于合并多个对象的属性到第一个对象，类似于 es6 的 `Object.assign()`，不过还是有区别的。

因为两者实际上指向的是同一个函数，此处只写 `jQuery.extend()`，但要知道的是它同时也指代 `jQuery.fn.extend()`。

参数：

- `deep`：可选，表示是否深度合并，默认为 `false`。
- `target`：表示合并的目标对象。
- `objectArr`：可选，表示源对象。

1. 参数修正。
 1. `target` 指向 `arguments[0] || {}`。
 2. 如果第一个参数为布尔值，那么赋值给 `deep` 变量，此时把 `target` 指向 `arguments[1] || {}`。
 3. 如果此时 `target` 不是对象，则令 `target` 为 `{}`。
 4. 如果只有一个参数，那么会以 `this` 为目标对象。
2. 遍历源对象。
 1. 遍历源对象属性。
 2. 为了防止死循环，如果 `target === copy` 则 `continue`。
 3. 如果是深度合并，那么递归调用 `jQuery.extend`。
 4. 否则不是深度合并并且覆盖的属性值不是 `undefined` 那么覆盖同名属性。 

### 原型属性和方法

- `jquery`：当前的 jQuery 版本。
- `constructor`：构造函数，为 jQuery。
- `init()`：实际的构造方法。
- `selector`：选择器，默认为 `""`，通过构造函数设置。
- `length`：包含的元素个数。
- `toArray()`：调用数组原型的 `slice`，将 jQuery 对象转为数组对象。
- `get()`：如果传入了下标参数，那么返回对应的元素，小于零时会加上 `length`。否则的话返回 `toArray` 的结果，一个纯数组。
- `pushStack()`：创建一个空的 jQuery 对象，把元素都放进去，并且在 `prevObject` 保存了对当前 jQuery 对象的引用，返回新的 jQuery 对象。
- `each()`：它本质上调用的是静态方法 `jQuery.each`，所以在下面写到静态方法的地方讲。
- `ready()`：它本质上调用的是静态方法 `jQuery.ready.promise()`，所以在下面写到静态方法的地方讲。
- `slice()`：调用数组原型的 `slice` 截取了一个子集，然后传给 `pushStack` 方法，创建一个包含子集的 jQuery 对象。
- `eq()`：根据传入下标参数，创建一个下表所在元素的 jQuery 对象。
- `first()`：等价于 `eq(0)`。
- `last()`：等价于 `eq(-1)`。
- `map()`：利用静态方法 `jQuery.map` 遍历元素，执行回调，然后利用 `pushStack` 返回一个新的 jQuery 对象。 
- `end()`：返回 `prevObject`，没有则返回空的 jQuery 对象。
- `push()`：借用数组原生的 `push`。
- `sort()`：借用数组原生的 `sort`。
- `splice()`：借用数组原生的 `splice`。
- 等等，因为还有很多原型属性和方法是通过 `extend` 方法在其它模块，而不是入口模块定义的。这部分在写其它模块时写到。

要着重介绍的是 `pushStack()` 和 `end()`，因为正是它们为我们带来了方便的链式写法。

###### `pushStack()`

```
pushStack: function( elems ) {
	// 新建一个 jQuery 对象，然后将传入的 elems 合并到它上面，放的位置是整数下标的位置
	var ret = jQuery.merge( this.constructor(), elems );
	// 指向链式调用的上一个 jQuery 对象
	ret.prevObject = this;
	ret.context = this.context;
	return ret;
}
```

###### `end()`

```
end: function() {
	// 如果没有 prevObject 说明在链式调用的最前端，此时返回空的 jQuery 对象；否则返回的是链式调用上一个 jQuery 对象。
	return this.prevObject || this.constructor(null);
}
```

每一个需要链式调用的 jQuery 方法都依赖于 `pushStack`，相当于往调用栈入栈，而 `end` 的作用则是返回上一个，相当于出栈。如此一来，我们就可以方便地进行链式调用了。例如像下面这个样子：

```
$('ul.first').find('.foo')
	.css('background-color', red)
end().find('.bar')
	.css('background-color', blue)
end();
```

### 静态属性和方法

- `expando`：一个独一无二的编号，等于 `"jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" )`。
- `noConflict()`：用于释放 jQuery 对全局变量 `$` 的控制权。它接受一个参数，如果为 `true` 也会释放对全局变量 `jQuery` 的控制权。如果第三方库也需要全局 `$` 变量，那么可以使用 `$.noConflict()` 来释放全局的 `$`，至于引入多个 jQuery 而要释放全局 jQuery 的情况，还是不讨论了，感觉有点傻。
- `isReady`、`readyWait`、`holdReady()`、`ready()` 用于支持 `ready` 事件在第九章事件中讲。
- 类型检测
 - `class2type`：这个不是静态属性，但是在类型检测中用到。它是如下结构：`{ "[object Array]":"array","[object Boolean]":"boolean"... }`，包括了所有的原生对象。
 - `type()`：如果是 `undefined` 或 `null` 则返回 `"undefined"` 或 `"null"`，如果是原生对象，则返回 `class2type[Object.prototype.toString.call(obj)]`，不是原生对象返回 `object`，如果不是对象或者函数，则返回 `typeof obj`。这里的知识点是，`Object.prototype.toString.call` 用来判断对象的类型，利用内部属性 [[Class]]，原始值则用 `typeof` 来判断。
 - `isFunction()`：调用 `jQuery.type(obj) === "function";` 进行判断。
 - `isArray()`：如果支持 `Array.isArray` 则用这个方法，否则使用 `jQuery.type(obj) === "array";`。
 - `isWindow()`：利用了 `window.window == window`。`obj != null && obj == obj.window;`。
 - `isNumeric()`：这个方法等同于 underscore 里的 `isFinite`，`isFinite(obj) && !isNaN(parseFloat(obj));`。
 - `isPlainObject()`：判断是否是 `{}` 或 `new Object()` 直接创建的对象。
  - 如果 `obj` 可以转换为 `false` 或 `Object.prototype.toString.call(obj)` 不是 `[object Object]` 或 obj 是 DOM 或 Window，这四种情况可以直接返回 `false`。
  - 如果 `obj` 有 `constructor` 并且是继承而来的，但是构造函数的原型上没有 `isPrototypeOf` 说明它不是由 `Object` 创建的。
  - IE 8/9 会抛出异常，捕获并返回 `false`。
  - `{}` 或 `new Object()` 直接创建的对象是没有可遍历的继承属性的，因此 `for...in` 遍历，如果有继承属性，那么返回 `false`。
 - `isEmptyObject()`：`for...in` 遍历属性，如果有则返回 `false`。
- `parseHTML()`：在构造函数中讲过了，用来解析 HTML 返回节点数组。
- `parseJSON`：如果支持 `JSON.parse` 则直接使用，对于 IE 8 一下不支持 `JSON` 对象的情况，jQuery 为我们进行了兼容。利用的不是 `eval`，而是 `new Function("return"+data)`。不过在使用前，需要将字符串取出前后空格，并用正则表达式进行检查合法性。如果不合法，会抛出一个错误。
- `parseXML()`：IE 使用 `new ActiveXObject("Microsoft.XMLDOM")` 来解析，其他浏览器使用标准的 `new DOMParser();`。这里还有非法性的处理，可以看源码。
- `globalEval`：在全局环境之下代码，如果支持 `window.execScript` 则使用，否则在匿名函数中使用 `eval`。`window[ "eval" ].call( window, data );`。不过个人觉得 `(0, eval)(data);` 这种方式更简洁，就不需要匿名函数了。
- `camelCase()`：把连字符转换为驼峰式，如 `background-color` 转为 `backgroundColor`。
- `nodeName()`：检查加点名称与指定值是否相等。
- `trim()`：如果浏览器支持 es5 的 `String.prototype.trim()` 则直接使用，否则使用正则表达式替换前后的空位。对于 `null` 和 `undefined` 返回空字符串。
- 数组操作
 - `each()`：前面的 `jQuery.prototype` 或者说 `jQuery.fn` 中的 `each()` 调用的就是这个通用的迭代方法。对于数组或有 `length` 属性的对象，它通过下标遍历，其他对象使用 `for...in` 遍历。回调函数中返回 `false` 终止遍历。在使用 `jQuery.fn.each()` 它返回的是当前对象，因此可以支持链式调用。
 - `map()`：对于数组或有 `length` 属性的对象遍历下标、对于对象则用 `for...in`，它与 `each()` 的区别在于，调用回调后，会把返回值存入一个结果数组，最后返回的也是结果数组。
 - `makeArray()`：如果第一个参数是类数组对象，则使用 `jQuery.merge`，否则直接把第一个参数 `push` 到数组中。这里的数组可以是第二个传入的参数，否则为 `[]`。
 - `inArray()`：支持 `indexOf()` 就用这个，否则遍历查找，第三个可选参数表示从哪里开始找。这里还有个小技巧是 `!!~jQuery.inArray` 来判断是否在，`~` 相当于改变符号并减一，再利用 `!` 转换为布尔值，比起比较来看，好像也差不多...不过逼格高一点。
 - `merge()`：用于把第二个数组合并到第一个数组上，如果第二个没有 `length` 属性，此时的策略的复制连续的整数下标属性到第一个上面。
 - `grep()`：过滤数组，如果回调的返回值转换为布尔类型的结果等于不第三个参数转换为布尔类型的结果，那么加入过滤数组，第三个参数默认为 `false`。最后返回过滤数组。
- `guid`：全局计数器，用于事件模块和缓存模块。
- `proxy()`：
 - `proxy(fn, context)`：设置 `fn` 的 `this` 为 `context`。
 - `proxy(context, name)`：`name` 是 `context` 的属性，`name` 所对应函数的 `this` 始终为 `context`。
- `access(elems, fn, key, value, chainable, emptyGet, raw)`：
 - 参数好多啊，为集合中的元素设置一个或多个值，或读取第一个元素的属性值。
 - 如果 `key` 是对象，那么遍历 `key`，递归调用自身。
 - 否则如果 `value` 则设置单个属性。
 - 如果 `value` 不是函数，直接调用回调函数。
 - 否则执行完函数后，把结果作为参数调用回调函数。
 - 还需要研究。
- `error()`：抛出一个错误。
- `noop`：一个空函数。 
- `now()`：返回当前时间。
- `swap()`：把第二个参数上的属性设置到第一个元素的 `style` 上，然后执行回调，并恢复为原来状态，不过暂时不知道具体有何用。看了 CSS 模块知道干嘛的了，一些修正函数在修正计算值时会加上一些样式来得到正确的计算值，然后进行恢复。

### 其它

到这里入口模块基本已经过了一遍，整体还是比较清晰的。剩下还有一点点要补充的。

###### isArraylike

比起我平时只判断的 `length`，jQuery 做了跟多细节上的处理。

```
function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );
	
	// window.length = 0
 	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	// DOM 元素且有 length 返回 true
	if ( obj.nodeType === 1 && length ) {
		return true;
	}
	
	// 如果是数组，但不是函数（因为函数也有 length 属性）
	// 或 length 为 0、length 大于 0 时需要有整数属性， length - 1。 
	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}
```
