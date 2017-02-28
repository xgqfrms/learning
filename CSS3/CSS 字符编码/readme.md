# CSS 字符编码




https://developer.mozilla.org/zh-CN/docs/Web/CSS/@charset


@charset CSS at-rule 指定样式表中使用的字符编码。
它必须是样式表中的第一个元素，而前面不得有任何字符。
因为它不是一个嵌套语句，所以不能在at-rules条件组中使用。

```css




@charset "<charset>";

Examples 
@charset "UTF-8"; 
/* Set the encoding of the style sheet to Unicode UTF-8 */

@charset 'iso-8859-15';
/* Invalid, wrong quoting style used */

@charset 'UTF-8';
/* Invalid, wrong quoting style used */

@charset  "UTF-8";
/* Invalid, more than one space */

 @charset "UTF-8";
/* Invalid, there is a character (a space) before the at-rule */

@charset UTF-8;
/* Invalid, without ' or ", the charset is not a CSS <string> */




``` 




https://www.w3.org/International/questions/qa-css-charset



https://www.w3.org/TR/CSS2/syndata.html#x57








正则表达式






