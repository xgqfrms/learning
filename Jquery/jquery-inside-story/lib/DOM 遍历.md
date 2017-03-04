## DOM 遍历

jQuery 不使用 `Element.prototype` 上一系列相关的元素变量属性和方法主要应该还是处于兼容性的考虑，那些属性和方法都是从 IE 9 开始兼容的。

### 工具方法

###### `sibling(cur,dir)`

从指定元素触发，找到指定方向的第一个元素节点。

###### `jQuery.filter(expr, elems, not)`

根据选择器过滤 `elems`，第三个参数表示过滤得到不匹配的元素。

1. 如果第三个参数为 `ture`，则将选择器表达式转为 `:not()` 包裹。
2. 如果只有一个节点，并为元素节点，那么使用 `jQuery.find.matchesSelector( elem, expr )` 匹配，成功返回这个元素的数组，否则返回空数组。
3. 如果有多个元素，使用 `jQuery.find.matches`，来检查过滤元素节点的元素数组，返回匹配元素集合。

###### `jQuery.dir(elem,dir[,until])`

从指定元素出发，查找指定方法上的所有元素，直到 `document` 或元素匹配 `until` 选择器结束查找。

*参数：*

- `elem`：查找的起始元素。
- `dir`：查找方向（`parentNode`、`nextSibing`、`previousSibling`）
- `until`：可选的选择器表达式，表示终止查找的条件。

*执行过程：*

1. 以 `elem[dir]` 为起点。
2. 判断终止条件是否成立。
 3. 如果找到为元素节点，则存入 `matched` 数组。
 4. 往同方向扩展得新的节点。
 5. 重复 3、4 直到符合终止条件。
3. 返回 `matched` 数组。

###### `jQuery.sibling(n[,elem])`

查找一个元素之后的所有兄弟元素，包括起始元素。

*参数：*

- `n`：查找的起始元素。
- `elem`：可选的 DOM 元素，不包含在结果中。

*执行过程：*

1. 从 `n` 开始，一直获取元素的下一个兄弟。
2. 如果是元素节点并且不等于 `elem` 那么加入结果数组。
3. 返回结果数组。

### 未封装方法

这些方法都会利用下面的模板方法进行封装。

###### `parent(elem)`

获取指定元素的父元素，过滤掉文档片段。

```
parent: function( elem ) {
	var parent = elem.parentNode;
	return parent && parent.nodeType !== 11 ? parent : null;
}
```

###### `parents(elem)`

返回指定元素的所有祖先，借助工具方法 `jQuery.dir`。

```
parents: function( elem ) {
	return jQuery.dir( elem, "parentNode" );
}
```

###### `parentsUntil(elem,i,until)`

返回直到指定结束条件的祖先元素，借助工具方法 `jQuery.dir`。

```
parentsUntil: function( elem, i, until ) {
	return jQuery.dir( elem, "parentNode", until );
}
```

###### `jQuery.fn.next(elem)`

获取指定元素之后的第一个兄弟元素节点，借助工具方法 `sibling`。

```
next: function( elem ) {
	return sibling( elem, "nextSibling" );
}
```

###### `jQuery.fn.prev(elem)`

获取指定元素之前的第一个兄弟元素节点，借助工具方法 `sibling`。

```
next: function( elem ) {
	return sibling( elem, "nextSibling" );
}
```

###### `jQuery.fn.prev(elem)`

获取指定元素之前的第一个兄弟元素节点。

```
next: function( elem ) {
	return sibling( elem, "previousSibling" );
}
```

###### `jQuery.fn.nextAll(elem)`

获取定元素之后的所有兄弟元素节点，借助工具方法 `jQuery.dir`。

```
nextAll: function( elem ) {
	return jQuery.dir( elem, "nextSibling" );
}
```

###### `jQuery.fn.prevAll(elem)`

获取定元素之前的所有兄弟元素节点，借助工具方法 `jQuery.dir`。

```
nextAll: function( elem ) {
	return jQuery.dir( elem, "previousSibling" );
}
```

###### `jQuery.fn.nextUntil(elem,i,until)`

获取定元素之后直到终止条件的所有兄弟元素节点，借助工具方法 `jQuery.dir`。

```
nextUntil: function( elem, i, until ) {
	return jQuery.dir( elem, "nextSibling", until );
}
```

###### `jQuery.fn.prevUutil(elem,i,until)`

获取定元素前直到终止条件的所有兄弟元素节点，借助工具方法 `jQuery.dir`。

```
nextUntil: function( elem, i, until ) {
	return jQuery.dir( elem, "previousSibling", until );
}
```

###### `jQuery.fn.siblings(elem)`

获取指定元素的所有兄弟元素节点，借助工具方法 `jQuery.sibling`。

```
siblings: function( elem ) {
	return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
}
```

###### `jQuery.fn.children(elem)`

获取指定元素所有的子元素节点，借助工具方法 `jQuery.sibling`。

```
children: function( elem ) {
	return jQuery.sibling( elem.firstChild );
}
```

###### `jQuery.fn.contents(elem)`

返回指定元素的所有子节点，包括了文本节点和注释节点，上面的方法都过滤了元素节点以外的节点。如果是 `iframe` 那么返回其 `document` 对象。IE 8+ 支持 `contentDocument` 属性，而 `contentWindow` 所有浏览器都支持。优先读取 `contentDocument` 可以减少一层作用域查找。

```
contents: function( elem ) {
	return jQuery.nodeName( elem, "iframe" ) ?
		elem.contentDocument || elem.contentWindow.document :
		jQuery.merge( [], elem.childNodes );
}
```

### 模板方法

```
jQuery.each({
	// 遍历将其使用模板方法进行封装
	parent: function( elem ) {//...},
	parents: function( elem ) {//...},
	parentsUntil: function( elem, i, until ) {//...},
	next: function( elem ) {//...},
	prev: function( elem ) {//...},
	nextAll: function( elem ) {//...},
	prevAll: function( elem ) {//...},
	nextUntil: function( elem, i, until ) {//...},
	prevUntil: function( elem, i, until ) {//...},
	siblings: function( elem ) {//...},
	children: function( elem ) {//...},
	contents: function( elem ) {//...}
}, function( name, fn ) {
	// 利用闭包持有 name、fn
	// 为 jQuery 实例绑定遍历相关方法
	jQuery.fn[ name ] = function( until, selector ) {
		// 所有匹配元素执行 fn
		var ret = jQuery.map( this, fn, until );
		// 如果不以 Until，那么修正 selector 参数为 until
		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}
		// 如果存在 selector 并为字符串，那么进行过滤，使用到了上面的 jQuery.filter 方法
		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}
		if ( this.length > 1 ) {
			// 去掉重复
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}
			// 对于 parent* 和 prev* 得到的结果重新排序
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}
		// 将结果封装为 jQuery 对象并返回
		return this.pushStack( ret );
	};
});
```
