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

名称：订单 值：<integer> 初始：0






The flex Shorthand

Name:   flex
Value:  none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’> ]
Initial:    1 0 auto
Applies to: flex items


flex: initial === flex: 0 1 auto

flex: auto === flex: 1 1 auto

flex: none === flex: 0 0 auto

flex: <positive-number> === flex: <positive-number> 1 0








## Applies to:  flex containers


display : flex;
display : inline-flex;

// 初始：row
flex-direction : row;
flex-direction : row-reverse;
flex-direction : column;
flex-direction : column-reverse;


// 初始：nowrap
flex-wrap : nowrap;
flex-wrap : wrap;
flex-wrap : wrap-reverse;


// 初始：row nowrap
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




## 






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












