# cursor




https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor/url




cursor: url(foo.cur), url(http://www.example.com/bar.gif), auto;


第一个数字是X坐标，第二个数字是Y坐标。该示例将热点设置为从左上角（0,0）到（4,12）处的像素。

cursor:  [<uri> [<x> <y>]?,]* keyword



.foo  {
    cursor:  auto;
    cursor:  url(cursor1.png) 4 12, auto;
}

.bar  {
    cursor:  pointer;
    cursor:  url(cursor2.png) 2 2, pointer;
} 

/* 
fallsback onto 'auto' and 'pointer' in IE, 
but must be set separately 
*/





