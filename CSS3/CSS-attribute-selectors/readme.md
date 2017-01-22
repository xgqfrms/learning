# CSS 属性选取器


## CSS Almanac  CSS 年鉴  

https://css-tricks.com/almanac/  

https://css-tricks.com/almanac/selectors/  

https://css-tricks.com/almanac/properties/  








CSS Selector Reference

http://www.w3schools.com/cssref/css_selectors.asp

http://www.w3schools.com/cssref/trysel.asp

CSS [attribute] Selector

http://www.w3schools.com/cssref/sel_attribute.asp



CSS 属性选取器


https://www.w3.org/TR/#tr_CSS

https://www.w3.org/TR/css3-selectors/  

Selectors Level 3
W3C Recommendation 29 September 2011


https://www.w3.org/TR/selectors-api/  

Selectors API Level 1
W3C Recommendation 21 February 2013


https://www.w3.org/TR/selectors4/

Selectors Level 4

W3C Working Draft 2 May 2013

https://www.w3.org/TR/selectors4/#overview




https://www.w3.org/TR/selectors-nonelement-1/

Non-element Selectors Module Level 1

W3C First Public Working Draft, 3 June 2014


https://dev.w3.org/2006/webapi/selectors-api2/

Selectors API Level 2

W3C Working Group Note 17 October 2013








CSS 属性选取器

https://www.youtube.com/watch?v=L8oORZV4wfU



Hello { this.props.name } 





input[type="date"]

属性具有此确切值

a [href*="https"]

在属性值中某处包含此值

a [href^="https"]

属性值以此开头

a [href$="https"]

属性值以此结束

a [href~="https"]

在以空格分隔的属性列表中,某处具有此值

a [href|="https"]

在以虚线分隔的属性列表中,某处具有此值




https://css-tricks.com/almanac/selectors/




[data-value] {
  /* Attribute exists */
}

[data-value="foo"] {
  /* Attribute has this exact value */
}

[data-value*="foo"] {
  /* Attribute value contains this value somewhere in it */
}

[data-value^="foo"] {
  /* Attribute value starts with this */
}

[data-value$="foo"] {
  /* Attribute value ends with this */
}

[data-value~="foo"] {
  /* Attribute has this value in a space-separated list somewhere */
}

[data-value=|"foo"] {
  /* Attribute value has this in a dash-separated list somewhere */
}










