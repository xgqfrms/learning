# radial-gradient


https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient


http://www.w3schools.com/css/css3_gradients.asp

https://css-tricks.com/css3-gradients/




CSS Image Values and Replaced Content Module Level 3

W3C Candidate Recommendation 17 April 2012

https://www.w3.org/TR/css3-images/











background: radial-gradient(shape size at position, start-color, ..., last-color);

<!-- background: #1e5799; -->
background: radial-gradient(ellipse at center, #0000ff 0%, #ffffff 50%,#ffffff 50.1%,#0000ff 100%);



http://www.colorzilla.com/gradient-editor/




radial-gradient

color steps 


http://www.imooc.com/video/11621



border 

width
radius

box-shadow

inset 

outline

outline-offset



http://www.imooc.com/qadetail/152225




radial-gradient(
  [ [ circle || <length> ] [ at <position> ]? , |
    [ ellipse || [ <length> | <percentage> ]{2} ] [ at <position> ]? , |
    [ [ circle | ellipse ] || <extent-keyword> ] [ at <position> ]? , |
    at <position> ,
  ]?
  <color-stop> [ , <color-stop> ]+
)

<position> =  x, y 

<extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side

<color-stop> = <color> [ <percentage> | <length> ]? 

radial-gradient(
    circle at 100px 100px, #FF0000 0%, #0000FF 100%
)

#FFFF80 20%, rgba(204, 153, 153, 0.4) 30%, #E6E6FF 60%);

#FF0000 0%, #0000FF 100%); 



https://developer.mozilla.org/en-US/docs/Web/CSS/position_value





// Definition of the ending shape
radial-gradient( circle, … )
/* Synonym of radial-gradient( circle farthest-corner, … ) */

radial-gradient( ellipse, … ) 
/* Synonym of radial-gradient( ellipse farthest-corner, … ) */

radial-gradient( <extent-keyword>, … ) 
/* It draws a circle */

radial-gradient( circle radius, … ) 
/* A centered circle of the given length. It can't be a percentage */

radial-gradient( ellipse x-axis y-axis, … ) 
/* The two semi-major axes are given, horizontal, then vertical */



// Definition of the position of the shape
radial-gradient ( … at <position>, … )

// Definition of the color stops
radial-gradient ( …, <color-stop>, … )
radial-gradient ( …, <color-stop>, <color-stop> )











Formal grammar: [
    [ left | center | right | top | bottom | <percentage> | <length> ] |

    [ left | center | right | <percentage> | <length> ] 
    [ top | center | bottom | <percentage> | <length> ] |

    [ center | [ left | right ] [ <percentage> | <length> ]? ] && 
    [ center | [ top | bottom ] [ <percentage> | <length> ]? ]
]

https://developer.mozilla.org/zh-CN/docs/Web/CSS/position_value




https://drafts.csswg.org/css-images-3/#radial-gradients


CSS Image Values and Replaced Content Module Level 3
Editor’s Draft, 22 January 2017

https://www.w3.org/TR/css3-images/#radial-gradients


<radial-gradient> = radial-gradient(
    [ 
        [ <shape> || <size> ] [ at <position> ]? , | at <position>, 
    ]?
    <color-stop> [ , <color-stop> ]+
) 


<radial-gradient> = radial-gradient(
    [ 
        [ circle || <length> ] [ at <position> ]? , | 
        [ ellipse || [ <length> | <percentage> ]{2} ] [ at <position> ]? , |
        [ [ circle | ellipse ] || <extent-keyword> ] [ at <position> ]? , |
        at <position> ,
  ]?
  <color-stop> [ , <color-stop> ]+
)

<extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side



https://github.com/cssmagic/blog/issues/54

https://github.com/junnuobaby/cartoon


http://www.cssmagic.net/demo/20090215-arc-nav/



