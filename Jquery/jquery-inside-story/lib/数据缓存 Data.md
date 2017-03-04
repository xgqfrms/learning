## 数据缓存 Data

jQuery 的数据缓存模块以一种安全的方式为 DOM 元素附加任意类型的数据，避免了在 JavaScript 对象与 DOM 元素之间出现循环引用，以及由此而导致的内存泄漏。

数据缓存模块为 DOM 元素和 JavaScript 对象提供了统一的数据设置、读取和移除方法，除了维护 jQuery 内部数据以外，它还支持用户自定义数据。

### 公开方法

|方法|功能|
|---|---|
|`jQuery.hasData(elem)`|判断一个 DOM 元素或 JavaScript 对象是否有关联数据|
|`jQuery.data(elem,name,data,pvt)`|为 DOM 元素或 JavaScript 对象设置任意类型的数据，或返回指定名称的数据，或返回关联的数据缓存对象|
|`jQuery.removeData(ekem,name,pvt)`|移除通过 `jQuery.data` 设置的数据|
|`.data(key,value)`|为选中的 DOM 元素设置或读取自定义数据，解析 HTML5 属性 `data-*` 并触发自定义事件 `getData`、`setData`、`changeData`|
|`.removeData(key)`|移除通过 `.data()` 设置的自定义数据|

### 实现原理

###### 为 DOM 元素附加数据

1. 为每个 DOM 元素分配一个唯一 id 并附加到 DOM 元素上。
2. 然后把该 id 添加到全局缓存对象 `jQuery.cache` 上，对应的属性是一个 JavaScript 对象。该对象被称为"DOM 元素的数据缓存对象"，其中存储了数据名与数据的映射。
3. 区分内部数据和自定义数据，避免冲突。

> id 从零自增，没有才会分配，id被附加到 `jQuery.expando` 为键的属性上。很明显这里的 id 不同于 HTML 中设置的 id。

###### 为 JavaScript 对象附加数据

对于 JavaScript 对象，数据直接存储在该对象的 `jQuery.expando` 属性上面。同样区分了内部数据和自定义数据。把 DOM 元素的缓存设置到全局缓存对象上是因为 IE 6、7 的垃圾回收机制无法处理 DOM 和 JavaScript 之间循环引用引起的问题，而 JavaScript 对象上能够正确触发垃圾回收。

### 总体结构

![](./img/数据缓存总体结构.png)

### 横扫源码

###### `jQuery.noData`、`jQuery.acceptData(elem)`

用于判断 DOM 元素是否可以设置数据。

在 `embeb`、`object`（除了 Flash 组件）、`applet` 上附加属性可能会抛出错误，而 jQuery 需要在 DOM 元素上附加唯一 id 来关联数据缓存对象，也就是说这三个元素不支持设置数据。源码也很简单，先排除了元素节点和文档节点，然后根据小写的节点名从 `noData` 获取对应的值，取反返回，对于 `object` 需要排除 `classid` 为 `clsid:D27CDB6E-AE6D-11cf-96B8-444553540000` 的 Flash 组件。

```
jQuery.extend({
	cache: {},

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"applet": true,
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	// ...

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});
```

###### `jQuery.data(elem,name,data)`、`jQuery._data(elem,name,data)`

```
jQuery.extend({
	cache: {},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},
	
	// ...
});
```

在 1.10.1 把两个方法的逻辑都放到了一个内部使用的 `internalData`，两个方法的唯一区别也就是最后一个参数不同，最后一个参数表示的是是否为内部数据。所以把视角转到 `internalData` 方法。

1. 用上面的 `jQuery.acceptData` 判断 `elem` 是否支持设置扩展属性，不支持直接返回。
2. 初始化局部变量：
 1. `internalKey`：等于 `jQuery.expando`。
 2. `isNode`：表示是否为 DOM 元素。
 3. `cache`：DOM 元素的缓存对象为 `jQuery.cache`，JavaScript 对象的缓存对象为自身。
 4. `id`：尝试获取关联 `id`。
3. 如果是从一个没有任何数据的对象上读取数据，则直接返回。
4. 如果 `id` 不存在，则分配：
 1. DOM 元素的 `id` 从删除的里面拿，没有则取 `jQuery.guid++`。
 2. JavaScript 对象的 `id` 直接为 `internalKey`。
5. 如果缓存数据不存在，则初始化为空对象。
6. 如果 `name` 为函数或对象，那么进行批量设置数据，此时的调用方式实际上是 `jQuery.data(elem, data)`。
7. 如果最后的参数不能转为 `true` 表示设置的是内部属性。初始化自定义数据，并把 `thisCache` 指向自定义数据。
8. 如果 `data` 不是 `undefined` 那么设置数据，`name` 会转为驼峰式。
9. 如果 `name` 是字符串，那么取出对应的缓存并返回。
10. 否则返回整个当前操作的缓存对象。

###### `jQuery.fn.data(key, value)`

- `.data(key, value)`：为每个元素设置数据，触发 `setData` 和 `changeData` 事件。
- `.data(obj)`：为每个元素批量设置数据。
- `.data(key)`：返回第一个匹配元素的指定名称的数据，触发 `getData` 数据。
- `.data()`：返回第一个匹配元素的自定义数据缓存对象。

1. `key` 是 `undefined`，表示上面的第四种情况，如果 `data-*` 属性还没有添加到自定义数据上，那么调用 `dataAttr`，添加并设置 `parsedAttrs` 为 `true` 表示已添加。返回的自定义数据缓存对象包含了 `data-*` 的数据。
2. 如果 `key` 是对象，对应上面第二种情况，那么遍历每个元素，批量设置数据。
3. 如果参数大于 1，对应第一种情况，遍历元素，设置数据。
4. 否则就取出第一个元素对应名称的属性值，自定义属性优先。

###### `jQuery.removeData(elem, name)`、`jQuery._removeData(elem, name)`

这两个方法也是一样，调用了一个内部的函数 `internalRemoveData`，区别也一样多了个参数表示操作的是内部的数据还是自定义的数据。

1. 用上面的 `jQuery.acceptData` 判断 `elem` 是否支持设置扩展属性，不支持直接返回。
2. 局部变量初始化，同 `internalData`。
3. 如果是从一个没有任何数据的对象上删除数据，则直接返回。
4. 根据最后一个参数，判断操作的当前缓存对象是内部数据还是自定义数据。
5. 根据 `name` 移除当前数据缓存对象上的数据。`name` 可以是数组、空格分割多个名字的字符串。
6. 如果缓存对象不为空，则直接返回。
7. 为空则需要进行一些操作来防止内存泄漏。
8. 如果操作的是自定义数据，则删除 `data` 属性，如果缓存对象不为空，则直接返回。
9. 到这一步说明缓存对象是空，那么对于 DOM 元素，需要调用 `jQuery.cleanData` 删除数据；JavaScript 对象删除 `cache[id]`，不支持删除 DOM 属性的浏览器使用 `cache[ id ] = null;`。这样就能够避免内存泄漏了。

###### `jQuery.fn.removeData(key)`

相对于 `.data` 方法来说简单很多，就是遍历元素，然后删除指定的 `key`。

```
removeData: function( key ) {
	return this.each(function() {
		jQuery.removeData( this, key );
	});
}
```

###### `jQuery.cleanData(elems, /* internal */ acceptData)`

用于移除多个 DOM 元素关联的全部数据和事件，仅在内部使用。它在 DOM 元素移除时，在内部被调用，确保了关联的数据和事件被移除，避免了内存泄漏的问题。例如 `remove`、`html`、`empty` 这三个常用的函数，在删除 DOM 元素或者子元素时会先调用 `jQuery.cleanData` 确保关联的数据和事件被移除。

1. 遍历元素数组。
2. 如果 `jQuery.acceptData` 判断为 `true` 则进行操作，否则跳过。
3. 取出 `id` 和缓存。
4. 遍历 `data.events` 逐个移除事件。
5. 移除缓存数据，扩展的 `jQuery.expando` 属性，然后把 `id` 放入已经移除的数组，供下次分配时再利用。

###### `jQuery.hasData(elem)`

1. 如果是 DOM 元素，那么从全局缓存对象中取。
2. 否则从 JavaScript 对象的 `jQuery.expando` 中取。
3. 判断取出的是否为数据对象，并返回判断结果。

```
hasData: function( elem ) {
	elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
	return !!elem && !isEmptyDataObject( elem );
}
```
