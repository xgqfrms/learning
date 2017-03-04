## DOM 操作

上一章的遍历方法，jQuery 为我们模拟了 IE 9 以下不支持的元素节点相关的属性。这一章的 DOM 操作，要讲的很大一部分是 jQuery 为我们模拟的元素节点在 DOM4 中才被定义的 `before`、`after`、`prepend`、`append` 等方法。当然除此之外 jQuery 还做了大量的扩展。

### 插入元素

###### `domMapip(args,callback,allowIntersection)`

负责转换 HTML 为 DOM 元素，然后调用传入的回调函数插入 DOM 元素。它为 jQuery 的一系列插入方法提供了支持。

1. `args` 是待插入的内容。
 1. 如果是函数，那么执行函数，并为每个元素执行 `domMapip`，传入函数执行的结果。
 2. 如果当前浏览器无法正确地复制文档片段中的 `check` 状态，为每个元素调用 `domMapip`，这样执行回调函数插入元素时，因为只有一个元素，避免了无法复制 `check` 状态的问题。
2. 用第二章讲的 `jQuery.buildFragment` 将 HTML 转为 DOM 元素，返回安全文档片段。
3. 取出第一个子节点，如果只有一个子节点那么用它覆盖文档片段变量 `fragment`，因为直接插入子节点比插入文档片段要快一点。
4. 如果第一个子节点存在。
 1. 取出 `script` 并修改 `type` 将其禁用。 
 1. 为每个元素执行回调，进行插入操作。
 2. 如果存在 `script` 则进行合并。
 3. 最后一个不会进行 `clone`。
5. 如果存在 `script`。
 1. 那么将其恢复。
 2. 遍历 `script`。
     1. 如果存在 `src`，那么同步加载并执行。
     2. 否则就全局环境下执行 `script` 中的内容。   
6. 清空 `fragment`、`first` 防止内存泄漏。 

> 关于 `script` 前面也讲过，这里在啰嗦一下。`innerHTML` 转换 HTML 后的 script 元素不会自动加载和执行，因此这里做了手动地操作。

###### `jQuery.fn.append()`

集合中每个元素末尾插入指定的内容，只能够在元素、文档、文档片段节点上使用。

```
append: function() {
	return this.domManip( arguments, function( elem ) {
		if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
			// 如果当前为 table 节点，插入的是 tr 节点
			// 那么返回 tabel 的 tbody 节点，没有则创建并返回
			var target = manipulationTarget( this, elem );
			target.appendChild( elem );
		}
	});
}
```

###### `jQuery.fn.prepend()`

集合中每个元素开头插入指定的内容，只能够在元素、文档、文档片段节点上使用。

```
prepend: function() {
	return this.domManip( arguments, function( elem ) {
		if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
			var target = manipulationTarget( this, elem );
			target.insertBefore( elem, target.firstChild );
		}
	});
}
```

###### `jQuery.fn.after()`

集合中每个元素之后插入指定的内容，所有节点都可以使用。

```
after: function() {
	return this.domManip( arguments, function( elem ) {
		if ( this.parentNode ) {
			this.parentNode.insertBefore( elem, this.nextSibling );
		}
	});
}
```

###### `jQuery.fn.before()`

集合中每个元素之后插入指定的内容，所有节点都可以使用。

```
before: function() {
	return this.domManip( arguments, function( elem ) {
		if ( this.parentNode ) {
			this.parentNode.insertBefore( elem, this );
		}
	});
}
```

###### 几个类似的方法

用于将匹配元素集合中的每个元素插入到目标元素对应的地方。

```
jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			// 根据选择器取出目标元素
			insert = jQuery( selector ),
			last = insert.length - 1;
		// 遍历目标元素数组，
		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			// 调用指定方法插入、替换到目标元素
			jQuery( insert[i] )[ original ]( elems );
			// 用插入的元素或复制品构造结果数组
			core_push.apply( ret, elems.get() );
		}
		// 结果数组构造为 jQuery 对象
		return this.pushStack( ret );
	};
});
```

###### `jQuery.fn.text([text])`

获取所有元素合并后的文本内容，或设置所有元素的文本内容。

1. 如果 `value` 是函数，那么会求值以后传入回调。
2. 如果 `value` 是 `undefined`，调用 `jQuery.text( this )` 返回时当前元素的 `textContent`。IE 9+ 支持，因此做了一些简单的兼容操作。
3. 否则清空内容，根据 `value` 创建文本节点并插入。

```
text: function( value ) {
	return jQuery.access( this, function( value ) {
		return value === undefined ?
			jQuery.text( this ) :
			this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
	}, null, value, arguments.length );
}
```

###### `jQuery.fn.html([value])`

获取第一个元素的 HTML 内容，或设置所有元素的 HTML 内容。

1. 如果没有传入 `value`，则通过 `innerHTML` 返回第一个元素的 HTML 内容，返回前过滤掉 jQuery 运行时设置的扩展属性 `jQuery.expando`。
2. 如果满足以下条件表示传入的字符串不需要修正，此时走捷径。
 1. 是 HTML 代码。
 2. 浏览器支持转换 `sctipt`、`style` 标签或不包含这两个标签。
 3. 浏览器不会剔除前导空白或不包含前导空白。
 4. 不需要包裹父标签就可以正确序列化。
3. 满足条件的字符串，修复闭合标签。
4. 然后利用 `innerHTML` 来设置，设置前需要 `cleanData` 防止内存泄漏。
5. 如果字符串需要修正，那么调用 `empty` 后用 `append` 进行插入，在 `buildFragment` 方法会对内容进行修正。

### 删除元素

###### `jQuery.fn.remove(selector,keepData)`

1. 传入了 `selector` 则利用其进行过滤，否则不过滤。
2. 便利过滤得到的元素集合。
3. 如果 `keepData` 不为 `true`，那么清除缓存的数据和事件。
4. 如果有 `script`，还要标记已经执行。 
5. 清除节点。

###### `jQuery.fn.detach(selector)`

`keepData` 为 `true`，通常用在移除以后还要再次插入的情况。

```
detach: function( selector ) {
	return this.remove( selector, true );
}
```

###### `jQuery.fn.empty()`

1. 遍历匹配元素集合。
2. 清除缓存的数据和事件。
3. 如果 `firstChild` 存在则一直清除。
4. 对于 `select` 元素，需要设置 `elem.options.length = 0`。

### 复制元素

###### `fixCloneNodeIssues`

1. IE 6-8 会复制事件，因此判断 `!jQuery.support.noCloneEvent` 移除 IE 6-8 复制的事件，并移除扩展属性 `jQuery.expando`。
2. `script` 元素，那么得到最新的 `text`，然后执行。
3. `object` 的赋值子代，在 IE 6-10 下不正确。
4. `radio`、`checkbox` 修复 `defaultChecked`、`checked`、`value`。
5. `option` 的 `defaultSelected`、`selected`。
6. `input`、`textarea` 修正 `defaultValue`。

###### jQuery.clone(elem,dataAndEvents,deepDataAndEvents)

1. 对于支持赋值 HTML5 元素，或元素元素不是 HTML5 元素，那么调用原生的 `cloneNode`。
2. 否则的话利用安全文档片段，来兼容 IE 6-8 下 `clone` 的问题。
3. 修正副本元素后代的不兼容属性。`fixCloneNodeIssues`，下文介绍。
4. `dataAndEvents` 为 `true`，复制数据和事件。
5. `deepDataAndEvents` 为 `true`，赋值后代元素的数据和事件。
6. 保存 `script` 执行历史。
7. 清空中间变量，避免内存泄漏。
8. 返回 `clone`。

###### `jQuery.fn.clone(dataAndEvents,deepDataAndEvents)`

调用了 `jQuery.clone` 进行复制元素。

```
clone: function( dataAndEvents, deepDataAndEvents ) {
	dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
	deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

	return this.map( function () {
		return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
	});
}
```

### 替换元素

###### `jQuery.fn.replaceWidth()`

用于将匹配元素用指定的元素进行替换。

1. 得到所有匹配元素的下一个兄弟和父亲节点数组。
2. 调用 `this.domManip`，在回调函数中移除当前节点，在其兄弟前插入指定转化后的节点。

###### `jQuery.fn.replaceAll(target)`

使用匹配元素集合中的元素替换目标元素，见上文。

### 包裹元素

###### `jQuery.fn.wrapAll(html)`

用于在匹配元素集合的所有元素前后包裹一段 HTML。

1. 如果 `html` 是函数，求值以后在递归调用，此时等同于 `.wrap`。
2. 创建包裹元素的 jQuery 对象。
3. 如果匹配元素有父亲，那么将其插入到第一个匹配元素去前。
4. 然后找到包裹元素最内层，将匹配元素集合插入。

###### `jQuery.fn.wrapInner(html)`

用于在匹配元素集合的每个元素内容前后包裹一段 HTML。

1. 如果 `html` 是函数，求值以后在递归调用。
2. 遍历元素。
 1. 如果有子节点那么调用 `contents.wrapAll` 进行包裹。
 2. 否则将 `html` append 到当前元素末尾。

###### `jQuery.fn.wrap(html)`

用于在匹配元素集合的每个元素前后包裹一段 HTML。遍历每个匹配元素，调用 `.wrapAll`。

###### `jQuery.fn.unwrap()`

查找每个匹配元素的父元素，然后用子元素 `replaceWith` 掉父元素，不过 `body` 不允许替换。