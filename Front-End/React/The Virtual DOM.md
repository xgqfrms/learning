# The Virtual DOM  


https://www.codecademy.com/articles/react-virtual-dom


https://www.codecademy.com/courses/react-101/




问题

DOM操作是现代互动网络的核心。不幸的是，它也比大多数JavaScript操作慢得多。

这种缓慢的情况更糟糕的是，大多数JavaScript框架更新DOM比他们更多。

例如，假设您有一个包含十个项目的列表。您检查第一个项目。大多数JavaScript框架将重建整个列表。这是十倍的工作比必要！只有一个项目改变，但剩余的九个重建完全如何他们以前。

重建列表对于Web浏览器来说并不重要，但现代网站可以使用大量的DOM操作。无效的更新已成为一个严重的问题。

为了解决这个问题，React的人们推广了一些叫做虚拟DOM的东西。

虚拟DOM

在React中，对于每个DOM对象，都有一个相应的“虚拟DOM对象”。虚拟DOM对象是DOM对象的表示，如轻量级的副本。

一个虚拟的DOM对象具有与一个真正的DOM对象相同的属性，但它缺乏真正的东西的力量直接改变屏幕上的内容。

操作DOM很慢。操作虚拟DOM要快得多，因为没有任何东西在屏幕上绘制。想想操作虚拟DOM作为编辑蓝图，而不是在实际的房子里移动房间。

它如何帮助

当渲染一个JSX元素时，每个虚拟DOM对象都会被更新。

这听起来不可思议的低效率，但是成本是微不足道的，因为虚拟的DOM可以这么快。

一旦虚拟DOM已更新，React会将虚拟DOM与更新之前拍摄的虚拟DOM快照进行比较。

通过将新的虚拟DOM与更新前版本进行比较，React确定了哪些虚拟DOM对象已更改。这个过程称为“差异”。

一旦React知道哪些虚拟DOM对象已经改变，那么React将在真正的DOM上更新那些对象，并且只更新那些对象。在我们前面的例子中，React将足够聪明，可以重建一个已检出的列表项，并且只剩下列表的其余部分。

这使一个很大的区别！ React只能更新DOM的必要部分。 React的性能声誉主要来自于这一创新。

总之，以下是当你尝试更新React中的DOM时会发生什么：

整个虚拟DOM被更新。
在更新虚拟DOM之前，虚拟DOM与它的外观相似。 React确定哪些对象已更改。
更改的对象和仅更改的对象将在真正的DOM上更新。
对真实DOM的更改会导致屏幕更改。
如果你想了解更多关于虚拟DOM的信息，这里是一个很好的开始。



**********************************************************************


The Problem

DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations.

This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

As an example, let's say that you have a list that contains ten items. You check off the first item. Most JavaScript frameworks would rebuild the entire list. That's ten times more work than necessary! Only one item changed, but the remaining nine get rebuilt exactly how they were before.

Rebuilding a list is no big deal to a web browser, but modern websites can use huge amounts of DOM manipulation. Inefficient updating has become a serious problem.

To address this problem, the people at React popularized something called the virtual DOM.

The Virtual DOM

In React, for every DOM object, there is a corresponding "virtual DOM object." A virtual DOM object is a representation of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

How it helps

When you render a JSX element, every single virtual DOM object gets updated.

This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.

Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called "diffing."

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item, and leave the rest of your list alone.

This makes a big difference! React can update only the necessary parts of the DOM. React's reputation for performance comes largely from this innovation.

In summary, here's what happens when you try to update the DOM in React:

The entire virtual DOM gets updated.
The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
The changed objects, and the changed objects only, get updated on the real DOM.
Changes on the real DOM cause the screen to change.
If you'd like to learn more about the virtual DOM, here's a good place to start.























