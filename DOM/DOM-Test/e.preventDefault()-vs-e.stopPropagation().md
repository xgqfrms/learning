# e.preventDefault() & e.stopPropagation()



http://jsforallof.us/2014/07/08/epreventdefault-estoppropagation/




如果你以前使用过jQuery，我想你之前遇到过e.preventDefault()，当试图阻止浏览器跳转到页面的顶部，当用户点击一个链接？就像是：




$('a#myLink').on('click', function(e){
    e.preventDefault();
    // do some jQuizzle magic
});



document.querySelector('a#myLink').addEventListener('click', function(e){
    e.preventDefault();
    // do some JS magic
});



所以，e.preventDefault()不是一个jQuery的东西。这是一个DOM事件模型的东西。










document.querySelector('#modal').addEventListener('click', function(e){
    e.stopPropagation();
    // carry on, nothing to see here
});





http://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault




stopPropagation 阻止事件从事件链冒泡。

preventDefault 防止浏览器对该事件进行默认操作。







http://files2.syncfusion.com/Downloads/Ebooks/jQuery_Succinctly.pdf




Cancel default browser behavior with preventDefault()

When a link is clicked or a form is submitted, the browser will invoke its default functionality associated with these events. For example, click an <a> link and the Web browser will attempt to load the value of the <a> href attribute in the current browser window. To stop the browser from performing this type of functionality, you can use the preventDefault() method of the jQuery normalized event object.

当链接被点击或提交表单时，浏览器将调用与这些事件相关联的默认功能。 
例如，单击<a>链接，Web浏览器将尝试加载当前浏览器窗口中<a> href属性的值。 
要停止浏览器执行此类功能，可以使用jQuery标准化事件对象的preventDefault() 方法。


Cancel event propagation with stopPropagation()

Events propagate (a.k.a. bubble) up the DOM. When an event handler is fired for any given element, the invoked event handler is also invoked for all ancestor elements. This default behavior facilitates solutions like event delegation. To prohibit this default bubbling, you can use the jQuery normalized event method stopPropagation().


事件传播（泡沫）上的DOM。 当为任何给定元素触发事件处理程序时，还会为所有祖先元素调用的事件处理程序。 这种默认行为有助于像事件委托这样的解决方案。 要禁止此默认冒泡，您可以使用jQuery标准化事件方法stopPropagation()。



event.stopPropagation();

https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation




event.stopImmediatePropagation()

https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation

阻止调用同一事件上的其他监听器。




如果某个元素有多个相同类型事件的事件监听函数,则当该类型的事件触发时,多个事件监听函数将按照顺序依次执行.如果某个监听函数执行了event.stopImmediatePropagation()方法,则除了该事件的冒泡行为被阻止之外(event.stopPropagation方法的作用),该元素绑定的其余相同类型事件的监听函数的执行也将被阻止.



除了该事件的冒泡行为被阻止之外(event.stopPropagation方法的作用),
该元素绑定的其余相同类型事件的监听函数的执行也将被阻止.



event.preventDefault()


https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault


如果事件可取消，则取消该事件，而不停止事件的进一步传播。


event.preventDefault();








