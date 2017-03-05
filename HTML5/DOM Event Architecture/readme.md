# DOM Event Architecture



https://www.w3.org/TR/uievents/#event-flow


https://www.w3.org/TR/uievents/images/eventflow.svg





3.1. Event dispatch and DOM event flow

This section gives a brief overview of the event dispatch mechanism and describes how events propagate through the DOM tree. Applications can dispatch event objects using the dispatchEvent() method, and the event object will propagatae through the DOM tree as determined by the DOM event flow.


本节简要介绍事件分派机制，并描述事件如何通过DOM树传播。应用程序可以使用dispatchEvent() 方法分派事件对象，并且事件对象将通过DOM事件流确定的DOM树传播。


Event objects are dispatched to an event target. But before dispatch can begin, the event object’s propagation path must first be determined.


事件对象将被分派到事件目标。 但在dispatch可以开始之前，必须先确定事件对象的传播路径。


The propagation path is an ordered list of current event targets through which the event passes. This propagation path reflects the hierarchical tree structure of the document. The last item in the list is the event target, and the preceding items in the list are referred to as the target’s ancestors, with the immediately preceding item as the target’s parent.

Once the propagation path has been determined, the event object passes through one or more event phases. There are three event phases: capture phase, target phase and bubble phase. Event objects complete these phases as described below. A phase will be skipped if it is not supported, or if the event object’s propagation has been stopped. For example, if the bubbles attribute is set to false, the bubble phase will be skipped, and if stopPropagation() has been called prior to the dispatch, all phases will be skipped.





https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions







