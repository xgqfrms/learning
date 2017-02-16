# csstriggers



http://csstriggers.com/


ayout Paint Composite
 
涂料 合成 布局

Blink
Gecko
WebKit
EdgeHTML

眨眼睛 壁虎 WebKit 边缘HTML

Chrome Firefox Safari Edge

Change from default

从默认更改

Subsequent updates

后续更新

https://github.com/ufo-github/css-triggers/blob/master/src/templates/index.hbs

https://github.com/ufo-github/css-triggers/blob/master/data/blink.json








https://csstriggers.com/transform

transformClose
Changing transform does not trigger any geometry changes or painting, which is very good. This means that the operation can likely be carried out by the compositor thread with the help of the GPU.

更改变换不会触发任何几何更改或绘画，这是非常好的。这意味着操作可能由合成器线程在GPU的帮助下执行。

https://csstriggers.com/float

Changing float alters the geometry of the element. That means that it may affect the position or size of other elements on the page, both of which require the browser to perform layout operations.

Once those layout operations have completed any damaged pixels will need to be painted and the page must then be composited together.

更改浮动将更改元素的几何。这意味着它可能会影响页面上其他元素的位置或大小，这两个元素都需要浏览器执行布局操作。

一旦这些布局操作完成，任何损坏的像素将需要被绘制，然后该页必须被合成在一起。



https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count



性能优化是一门做减法的艺术。我们首要要尽力简化页面渲染过程，然后要使渲染过程的每一步都尽量高效。在很多时候，我们需要跟浏览器一起努力来创建高性能web应用，而不是跟浏览器对着干。要记住，以上列举的流水线中的每一步，在时间消耗上是各不相同的，有些步骤是相对更费时的。

接下来，让我们深入到这个流水线中的每一步去看看。我们会以一些常见问题为例，阐述如何发现和分析这些问题，并尝试去解决它们。



浏览器渲染优化

 
想深入了解渲染性能吗？快看看这堂课程吧 它能帮助你了解浏览器是如何把HTML/CSS/JavaScript代码转换成屏幕上你看到的一个个像素的 如何使用DevTools来测量页面性能、以及如何优化你的页面渲染速度。


https://udacity.com/ud860













