# Flexbox





https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes




https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://bocoup.com/blog/dive-into-flexbox/

http://zomigi.com/blog/flexbox-presentation/



http://zomigi.com/downloads/Putting-Flexbox-Into-Practice_Blend-Conf_130907.pdf

http://www.stunningcss3.com/

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes









http://www.smoresday.us/builder.html


CSS Flexible Box Layout Module Level 1
W3C Candidate Recommendation, 26 May 2016









3. Flex Containers: the flex and inline-flex display values

Name:   display
New values: flex | inline-flex


flex
This value causes an element to generate a block-level flex container box.

inline-flex
This value causes an element to generate an inline-level flex container box.



flex 
此值使一个元件，以产生一个块级柔性容器箱。 

nline-flex
此值使一个元素生成一个行内Flex容器盒。



Unlike block and inline layout, whose layout calculations are biased to the block and inline flow directions, flex layout is biased to the flex directions

与块和内联布局不同，其布局计算偏向于块和在线流动方向，柔性布局偏向于柔性方向





CSS Writing Modes Level 3

W3C Candidate Recommendation, 15 December 2015

https://www.w3.org/TR/css-writing-modes-3/#abstract-box







Flex Containers: the flex and inline-flex display values

Name:   display
New values: flex | inline-flex










5. Ordering and Orientation

The contents of a flex container can be laid out in any direction and in any order. This allows an author to trivially achieve effects that would previously have required complex or fragile methods, such as hacks using the float and clear properties. 

This functionality is exposed through the flex-direction, flex-wrap, and order properties.



Flex Flow Direction: the flex-direction property

Name:   flex-direction
Value:  row | row-reverse | column | column-reverse
Initial:    row
Applies to: flex containers


The flex-direction property specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis. This determines the direction in which flex items are laid out.

flex-direction属性通过设置flex容器主轴的方向来指定flex项目如何放置在flex容器中。这确定了柔性项目布局的方向。












Flex Line Wrapping: the flex-wrap property

Name:   flex-wrap
Value:  nowrap | wrap | wrap-reverse
Initial:    nowrap
Applies to: flex containers

The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.

flex-wrap属性控制flex容器是单行还是多行，以及交叉轴的方向，这决定了新行的堆叠方向。






Flex Direction and Wrap: the flex-flow shorthand

Name:   flex-flow
Value:  <flex-direction> || <flex-wrap>
Initial:    row nowrap
Applies to: flex containers

The flex-flow property is a shorthand for setting the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes.

flex-flow属性是设置flex-direction和flex-wrap属性的缩写，它们一起定义flex容器的主轴和横轴。




https://www.w3.org/TR/css-writing-modes-3/#writing-mode




Display Order: the order property

Flex items are, by default, displayed and laid out in the same order as they appear in the source document. The order property can be used to change this ordering.

Name:   order
Value:  <integer>
Initial:    0
Applies to: flex items and absolutely-positioned children of flex containers


显示顺序：顺序属性 

默认情况下，Flex项目以与在源文档中显示的顺序相同的顺序显示和布局。 order属性可用于更改此顺序。 

名称：订单 值：<integer> 初始值：0






The flex Shorthand

Name:   flex
Value:  none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’> ]
Initial:    1 0 auto
Applies to: flex items


flex: initial === flex: 0 1 auto

flex: auto === flex: 1 1 auto

flex: none === flex: 0 0 auto

flex: <positive-number> === flex: <positive-number> 1 0


The flex property specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis. When a box is a flex item, flex is consulted instead of the main size property to determine the main size of the box. If a box is not a flex item, flex has no effect.

flex属性指定flex长度的组件
flex增长因子和flex收缩因子，以及flex基准。
当一个框是一个flex项时，参考flex而不是主size属性来确定框的主要尺寸。
如果一个框不是一个flex项，flex不起作用。


<‘flex-grow’>
This <number> component sets flex-grow longhand and specifies the flex grow factor, which determines how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is distributed. When omitted, it is set to 1.

这个<number>组件设置flex-grow longhand，并指定flex增长因子，它确定当分配正空闲空间时，flex项目相对于flex容器中其余flex项目的增长量。省略时，设置为1。


<‘flex-shrink’>
This <number> component sets flex-shrink longhand and specifies the flex shrink factor, which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed. When omitted, it is set to 1.


这个<number>组件设置flex-shrink  longhand ，并指定flex收缩因子，它确定当分配负自由空间时，flex项相对于flex容器中的其余flex项收缩多少。省略时，设置为1。


Note: The flex shrink factor is multiplied by the flex base size when distributing negative space. This distributes negative space in proportion to how much the item is able to shrink, so that e.g. a small item won’t shrink to zero before a larger item has been noticeably reduced.


注意：分配负空间时，Flex收缩因子乘以flex基本尺寸。
这与物品能够收缩多少成比例地分配负空间，使得例如在较大的项目显着减少之前，小项目将不会收缩到零。


<‘flex-basis’>
This component sets the flex-basis longhand, which specifies the flex basis: the initial main size of the flex item, before free space is distributed according to the flex factors.

这个组件设置flex-basis longhand，它指定flex基础：flex项目的初始主要尺寸，根据flex因子分配可用空间之前。


<‘flex-basis’> accepts the same values as the width and height properties (except that auto is treated differently) plus the content keyword:


<'flex-basis'>接受与宽度和高度属性相同的值（除了auto被视为不同）加上content关键字：



auto
When specified on a flex item, the auto keyword retrieves the value of the main size property as the used flex-basis. If that value is itself auto, then the used value is content.

当在flex项目上指定时，auto关键字检索main size属性的值作为使用的flex-basis。
如果该值本身是auto，则使用的值是content。


content
Indicates automatic sizing, based on the flex item’s content.

表示基于flex项目的内容自动调整大小。

Note: This value was not present in the initial release of Flexible Box Layout, and thus some older implementations will not support it. The equivalent effect can be achieved by using auto together with a main size (width or height) of auto.

注意：此值在Flexible Box Layout的初始版本中不存在，因此一些较旧的实现将不支持它。通过使用auto和auto的主要尺寸（宽度或高度）可以实现等效效果。

<‘width’>
For all other values, flex-basis is resolved the same way as for width and height.

对于所有其他值，flex-basis解析与宽度和高度相同的方式。


When omitted from the flex shorthand, its specified value is 0.

当从flex缩写中省略时，其指定的值为0。


none
The keyword none expands to 0 0 auto.

关键字none将扩展为0 0 auto。


The initial values of the flex components are equivalent to flex: 0 1 auto.

flex组件的初始值等同于flex：0 1 auto。





The flex-grow property

Name:   flex-grow
Value:  <number>
Initial:    0
Applies to: flex items


The flex-shrink property

Name:   flex-shrink
Value:  <number>
Initial:    1
Applies to: flex items


The flex-basis property

Name:   flex-basis
Value:  content | <‘width’>
Initial:    auto
Applies to: flex items




## Alignment



The margin properties can be used to align items in a manner similar to, but more powerful than, what margins can do in block layout.

margin属性可用于以类似于但是比margin可以做的块布局更强大的方式对齐项目。


Auto margins on flex items have an effect very similar to auto margins in block flow:

flex 项目上的auto 边距的效果与块流中的自动边距非常相似：



During calculations of flex bases and flexible lengths, auto margins are treated as 0.
Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.
Overflowing boxes ignore their auto margins and overflow in the end direction.

在计算灵活基数和灵活长度时，自动边距被视为0。
在通过justify-content和align-self进行对齐之前，任何正空闲空间被分布到该维度中的自动边距。
溢出框忽略它们的自动边距，并在结束方向溢出。


margin-left: auto;


Axis Alignment: the justify-content property

Name:   justify-content
Value:  flex-start | flex-end | center | space-between | space-around
Initial:    flex-start
Applies to: flex containers


Cross-axis Alignment: the align-items and align-self properties

Name:   align-items
Value:  flex-start | flex-end | center | baseline | stretch
Initial:    stretch
Applies to: flex containers

Name:   align-self
Value:  auto | flex-start | flex-end | center | baseline | stretch
Initial:    auto
Applies to: flex items


Packing Flex Lines: the align-content property

Name:   align-content
Value:  flex-start | flex-end | center | space-between | space-around | stretch
Initial:    stretch
Applies to: multi-line flex containers












https://www.w3.org/TR/css-flexbox-1/#property-index







https://www.w3.org/TR/css-align-3/

CSS Box Alignment Module Level 3
W3C Working Draft, 15 February 2017

















## Applies to:  flex containers


display : flex;
display : inline-flex;

// 初始值：row
flex-direction : row;
flex-direction : row-reverse;
flex-direction : column;
flex-direction : column-reverse;


// 初始值：nowrap
flex-wrap : nowrap;
flex-wrap : wrap;
flex-wrap : wrap-reverse;


// 初始值：row nowrap
flex-flow : row nowrap;
flex-flow : row wrap;
flex-flow : row wrap-reverse;

flex-flow : row-reverse nowrap;
flex-flow : row-reverse wrap;
flex-flow : row-reverse wrap-reverse;

flex-flow : column nowrap;
flex-flow : column wrap;
flex-flow : column wrap-reverse;

flex-flow : column-reverse nowrap;
flex-flow : column-reverse wrap;
flex-flow : column-reverse wrap-reverse;

flex-flow : <flex-direction> || <flex-wrap>;

// 4 <flex-direction> x 3 <flex-wrap> = 12




## Applies to:  flex items



flex: none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’>


flex: initial;
flex: 0 1 auto;

flex: auto;
flex: 1 1 auto;

flex: none;
flex: 0 0 auto;

flex: <positive-number>;
flex: <positive-number> 1 0;









margin: auto;
margin-*: auto;


## Applies to:  flex containers

// 初始值：flex-start
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;


// 初始值：stretch
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
align-items: stretch;


## Applies to:  multi-line flex containers

// 初始值：stretch
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: stretch;


## Applies to:  flex items

// 初始值：auto
align-self: auto;
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: baseline;
align-self: stretch;















## Holy Grail Layout(Flexible Box Layout )  

http://codepen.io/xgqfrms/pen/MpjadZ


Holy Grail Layout(Flexible Box Layout )

圣杯布局（弹性框布局）




In CSS, the adjoining margins of two or more boxes (which might or might not be siblings) can combine to form a single margin. Margins that combine this way are said to collapse, and the resulting combined margin is called a collapsed margin.


在CSS中，两个或多个框（它们可能是或不是兄弟）的邻接边界可以组合形成单个边距。以这种方式组合的边缘被称为塌陷，并且所得到的组合边缘被称为折叠边缘。


https://www.w3.org/TR/CSS2/box.html#collapsing-margins


https://www.w3.org/TR/CSS2/visuren.html#block-formatting

## Block formatting contexts 块格式化上下文


https://www.w3.org/TR/CSS2/visuren.html#block-boxes




## Anonymous block boxes

https://www.w3.org/TR/CSS2/visuren.html#block-boxes


换句话说：如果一个block container box (例如为上面的DIV生成的框)在其内部有一个block-level box（例如上面的P），那么我们强制它里面的只有block-level boxes。


<DIV>
    Some text
    <P>More text
</DIV>


https://www.w3.org/TR/CSS2/images/anon-block.png



https://www.w3.org/TR/CSS2/intro.html

https://www.w3.org/TR/CSS/#css

https://www.w3.org/TR/CSS22/
https://www.w3.org/TR/CSS22/selector.html
https://www.w3.org/TR/CSS22/box.html
https://www.w3.org/TR/CSS22/visuren.html#normal-flow

Vertical margins between adjacent block-level boxes in a block formatting context collapse.

块格式化上下文中相邻块级框之间的垂直边距折叠。


https://www.w3.org/TR/CSS22/visuren.html#relative-positioning


The 'top' and 'bottom' properties move relatively positioned element(s) up or down without changing their size. 'Top' moves the boxes down, and 'bottom' moves them up. Since boxes are not split or stretched as a result of 'top' or 'bottom', the used values are always: top = -bottom. If both are 'auto', their used values are both '0'. If one of them is 'auto', it becomes the negative of the other. If neither is 'auto', 'bottom' is ignored (i.e., the used value of 'bottom' will be minus the value of 'top').


top”和“bottom”属性向上或向下移动相对定位的元素，而不改变其大小。
“顶部”将盒子向下移动，“底部”将它们向上移动。由于“top”或“bottom”不会分割或拉伸框，所以使用的值总是：top = -bottom。
如果两者都是'auto'，它们的使用值都为'0'。如果其中一个是'auto'，它变成另一个的负。
如果两者都不是'auto'，'bottom'被忽略（即，'bottom'的使用值将减去'top'的值）。

https://www.w3.org/TR/CSS2/visuren.html#block-boxes

https://www.w3.org/TR/CSS22/visuren.html#relative-positioning








http://www.cnblogs.com/xgqfrms/p/5834400.html

CSS 定位 relative && absolute 问题？
谁能解释一下，为什么div使用 relative是设置right,bottom 后，看不到div 呀，哪里多出来的 top , left 属性负值呀？
（已测试了所有最新的浏览器，自动添加的top , left 属性负值）



http://www.cnblogs.com/xgqfrms/p/5834400.html#3633073

position: relative; 
right: 200px;
bottom: 200px;


想对当前自己的位置(0,0) 偏移(-200, -200);

由于(0,0) 向右，向上都没有空间了，所以只能使用负值表示了！

引用

right: 200px;
bottom: 200px;
===
-top : 200px;
-left: 200px;

top = -bottom
left= - right

top”和“bottom”属性向上或向下移动相对定位的元素，而不改变其大小。
“顶部”将盒子向下移动，“底部”将它们向上移动。由于“top”或“bottom”不会分割或拉伸框，所以使用的值总是：top = -bottom。







https://www.w3.org/TR/css-flexbox-1/

https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes



