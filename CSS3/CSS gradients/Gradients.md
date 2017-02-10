# Gradients  


http://www.w3schools.com/css/css3_gradients.asp  


Linear Gradients  
(goes down/up/left/right/diagonally)  

Radial Gradients  
(defined by their center)  




background: linear-gradient(direction, color-stop1, color-stop2, ...);  

background: linear-gradient(angle, color-stop1, color-stop2);  



background: radial-gradient(shape size at position, start-color, ..., last-color);  

<!-- ??? multi gradients ???  -->





# linear-gradient()


## gradient-line


https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient



http://www.w3schools.com/css/css3_gradients.asp

https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient

https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient

https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Gradient_with_multiple_color_stops





## gradient-generator

http://www.cssmatic.com/gradient-generator#'\-moz\-linear\-gradient\%28left\%2C\%20rgba\%28248\%2C80\%2C50\%2C1\%29\%200\%25\%2C\%20rgba\%28241\%2C111\%2C92\%2C1\%29\%2050\%25\%2C\%20rgba\%28246\%2C41\%2C12\%2C1\%29\%2051\%25\%2C\%20rgba\%28240\%2C47\%2C23\%2C1\%29\%2071\%25\%2C\%20rgba\%28231\%2C56\%2C39\%2C1\%29\%20100\%25\%29\%3B'






linear-gradient( 
    [ <angle> | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ 
);


<side-or-corner> = [left | right] || [top | bottom]

<color-stop> = <color> [ <percentage> | <length> ]?



linear-gradient( 
    [ 
        [ <angle> | [top | bottom] || [left | right] ],
    ]? 
    <color-stop>
    [, <color-stop>]+
);



linear-gradient(
    [ 
        [ 
            [ <angle> | to [top | bottom] || [left | right] ],
        ]? 
        <color-stop>
        [, <color-stop>]+
);




-webkit-gradient(<type>, <point> [, <radius>]?, <point> [, <radius>]? [, <stop>]*)


-moz-linear-gradient([ [ [top | bottom] || [left | right] ],]? <color-stop>[, <color-stop>]+);





<color-stop-list> =
    [ <linear-color-stop> , <linear-color-hint>? ]# , 
    <linear-color-stop>

<linear-color-stop> = <color> && <color-stop-length>

<linear-color-hint> = <length> | <percentage>

<color-stop-length> = [ <length> | <percentage> ]{1,2}












