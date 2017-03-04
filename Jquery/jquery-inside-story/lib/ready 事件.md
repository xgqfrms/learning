## ready 事件

在第二章的时候我们略过了 `jQuery.ready` 这个方法，在看完事件系统以后，来补一个番外。

### 什么是 ready 事件 ？

ready 事件是一种更普遍的说法，在 IE 9+ 以及其它现代浏览器中就是 `DOMContentLoaded` 事件，这个事件会在 DOM 结构加载完毕时触发。通常在这个时候我们的 Js 就可以执行了。

而在 IE 9 以下，一般会用 `onreadystatechange` 事件来代替，或者 `document.docuementElement.doScroll('left')` 来兼容，我们把 IE 9 以下 `onreadystatechange` 事件和 `DOMContentLoaded` 事件统一叫做 `ready` 事件，本质上没有改变，还是代表了 DOM 结构加载完毕时触发的事件。

另外，load 事件在 ready 后触发，load 事件要求资源都加载完毕。

### jQuery 兼容实现

###### 相关变量、方法

- `readyList`：注册的事件列表。
- `jQuery.fn.ready()`：`jQuery.ready.promise().done( fn );`。
- `jQuery.isReady`：全局 ready 标记，ready 事件触发时设置为 `true`。
- `jQuery.readyWait`：全局 ready 事件等待计数器。
- `jQuery.holdReady()`：延迟或恢复等待事件的触发。
- `jQuery.ready()`：DOM 加载完成时执行，执行 ready 事件监听函数列表 `readyList`。
- `completed()`：ready 事件的监听函数。
- `detach()`：移除 ready 事件的监听函数。

###### 绑定 `ready` 事件

jQuery 使用 `jQuery.fn.ready()` 来绑定 ready 事件，内部使用了 `jQuery.ready.promise().done( fn );` 方法，所以看看这个方法干了什么。

```
jQuery.ready.promise = function( obj ) {
	// 如果 readyList 已经存在，那么只要向其中添加新的回调。
	if ( !readyList ) {
		// readyList 是一个 jQuery defered 对象
		readyList = jQuery.Deferred();

		// IE 9 和 10 下，ready 事件触发时机太早，所以使用这种方式来解决。
		if ( document.readyState === "complete" ) {
			setTimeout( jQuery.ready );
		// 使用标准的 `DOMContentLoaded` 事件
		} else if ( document.addEventListener ) {
			document.addEventListener( "DOMContentLoaded", completed, false );
			window.addEventListener( "load", completed, false );
		// IE 事件模型下
		} else {
			document.attachEvent( "onreadystatechange", completed );
			window.attachEvent( "onload", completed );

			// 如果当前是顶层窗口，而不是 frame 还可以使用如下方法来检测 ready 事件。
			// 当页面内容较多或包含较多 frame，这种方式往往会先触发 ready 事件。
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// 每隔 50 ms 模拟点击滚动条，直到不出现异常，表示已经 ready。
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}
						// 移除事件 
						detach();
						// 触发绑定的函数
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};
```

###### 触发 `ready` 事件

当 ready 事件触发时，会执行 `completed` 方法：

```
// ready 处理函数
completed = function( event ) {
	// 移除绑定的事件并调用 `jQuery.ready()`
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
		detach();
		jQuery.ready();
	}
},
// 清除绑定的 ready、load 事件
detach = function() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
};
```

###### `jQuery.ready`

```
ready: function( wait ) {
	// 正常触发 jQuery.ready wait 为 undefined
	// 只有 holdReady 中调用，wait 才会为 true
	// 恢复延迟，如果仍存在延迟则返回，否则表示可以进行执行。
	if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
		return;
	}
	// 确保 body 存在，IE 下触发时机可能过早
	if ( !document.body ) {
		return setTimeout( jQuery.ready );
	}
	// 修改全局 ready 事件的状态
	jQuery.isReady = true;
	// 如果普通的 ready 触发，如果仍有等待数，那么等待数减一
	if ( wait !== true && --jQuery.readyWait > 0 ) {
		return;
	}
	// 执行所有绑定的回调函数
	readyList.resolveWith( document, [ jQuery ] );
	// 手动触发，执行通过 .on 绑定的 ready 事件监听函数，感觉这里只需要 off 就行了。
	if ( jQuery.fn.trigger ) {
		jQuery( document ).trigger("ready").off("ready");
	}
}
```

### 小结

1. `jQuery.fn.ready()` => `jQuery.ready.promise().done( fn )` 提供兼容性的绑定；
2. `completed()` 提供移除绑定和触发 `jQuery.ready()`；
3. `jQuery.holdReady()` 提供延迟 ready 的执行。
4. `jQuery.ready` 提供延迟操作，执行绑定的回调，以及处理 `.on` 绑定的监听函数。