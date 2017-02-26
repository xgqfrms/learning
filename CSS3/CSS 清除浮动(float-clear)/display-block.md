# display: block


清除浮动


https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear

https://www.sitepoint.com/clearing-floats-overview-different-clearfix-methods/




```css

/* new clearfix */
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

/* old clearfix */

.clearfix:after {
    content: "";
    display: block;
    clear: both;
}

``` 

