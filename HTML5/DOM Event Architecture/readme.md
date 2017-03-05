# DOM Event Architecture



https://www.w3.org/TR/uievents/#event-flow


https://www.w3.org/TR/uievents/images/eventflow.svg





3.1. Event dispatch and DOM event flow 事件分派和DOM事件流

This section gives a brief overview of the event dispatch mechanism and describes how events propagate through the DOM tree. Applications can dispatch event objects using the dispatchEvent() method, and the event object will propagatae through the DOM tree as determined by the DOM event flow.


本节简要介绍事件分派机制，并描述事件如何通过DOM树传播。应用程序可以使用dispatchEvent() 方法分派事件对象，并且事件对象将通过DOM事件流确定的DOM树传播。


Event objects are dispatched to an event target. But before dispatch can begin, the event object’s propagation path must first be determined.


事件对象将被分派到事件目标。 但在dispatch可以开始之前，必须先确定事件对象的传播路径。


The propagation path is an ordered list of current event targets through which the event passes. This propagation path reflects the hierarchical tree structure of the document. The last item in the list is the event target, and the preceding items in the list are referred to as the target’s ancestors, with the immediately preceding item as the target’s parent.

Once the propagation path has been determined, the event object passes through one or more event phases. There are three event phases: capture phase, target phase and bubble phase. Event objects complete these phases as described below. A phase will be skipped if it is not supported, or if the event object’s propagation has been stopped. For example, if the bubbles attribute is set to false, the bubble phase will be skipped, and if stopPropagation() has been called prior to the dispatch, all phases will be skipped.




    The capture phase: The event object propagates through the target’s ancestors from the Window to the target’s parent. This phase is also known as the capturing phase.

    The target phase: The event object arrives at the event object’s event target. This phase is also known as the at-target phase. If the event type indicates that the event doesn’t bubble, then the event object will halt after completion of this phase.

    The bubble phase: The event object propagates through the target’s ancestors in reverse order, starting with the target’s parent and ending with the Window. This phase is also known as the bubbling phase.

捕获阶段：
    事件对象通过目标的祖先从窗口(Window)传播到目标的父代。这个阶段也称为捕获阶段(capturing phase)。


目标阶段：
    事件对象到达事件对象的事件目标(event target)。该阶段也称为在目标阶段(at-target phase)。如果事件类型(event type)指示事件不发生冒泡，则事件对象将在此阶段完成后暂停。


冒泡阶段：
    事件对象通过目标的祖先以相反的顺序传播，从目标的父开始，以窗口(Window)结束。该阶段也称为起泡阶段(bubbling phase.)。







3.2. Default actions and cancelable events 默认操作和可取消事件

    Events are typically dispatched by the implementation as a result of a user action, in response to the completion of a task, or to signal progress during asynchronous activity (such as a network request). Some events can be used to control the behavior that the implementation may take next (or undo an action that the implementation already took). Events in this category are said to be cancelable and the behavior they cancel is called their default action. Cancelable event objects can be associated with one or more 'default actions'. To cancel an event, call the preventDefault() method.



https://www.w3.org/TR/uievents/#event-type



https://www.w3.org/TR/uievents/#event-target























https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions







