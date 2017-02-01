# CSS counter-increment  

https://www.w3.org/TR/CSS21/generate.html#counters

https://www.w3.org/TR/CSS2/generate.html


https://www.w3.org/wiki/CSS/Properties/counter-increment

http://caniuse.com/#search=counter-increment



http://www.w3schools.com/cssref/pr_gen_counter-increment.asp

https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters

https://css-tricks.com/almanac/properties/c/counter-increment/


http://reference.sitepoint.com/css/counter-increment



## demo 

CSS counter-increment

http://2016.js13kgames.com/#winners

http://2016.js13kgames.com/style.css?v=2016v2


counter-increment: rule;
// (0,1,2, ...)
content: counter(rule); 
// (0)

http://js13kgames.com/style.css?v=2016v2
http://js13kgames.com/



.winner h3:before {
    counter-increment: rule;
    content: counter(rule);
    background: url(/img/trophy.png) no-repeat;
    display: inline-block;
    width: 85px;
    height: 80px;
    line-height: 44px;
    font-size: 28px;
    text-align: center;
    padding-right: 15px;
    margin-left: 10px;
    text-shadow: 0px 1px 0px #eb6e76;
    margin-bottom: 5px;
}



#rules {
    counter-reset: rule;
}

.rule {
    margin-bottom: 0;
    padding: 10px 20px 0;
    border-bottom: 1px dotted #F2F2FA;
}

.rule h3 {
    font-size: 20px;
}

.rule h3:before {
    counter-increment: rule;
    content: counter(rule);
    background: url(/img/ribbon_arrow.png) no-repeat;
    display: inline-block;
    width: 82px;
    height: 53px;
    line-height: 44px;
    font-size: 28px;
    text-align: center;
    padding-right: 15px;
    margin-left: -31px;
    text-shadow: 0px 1px 0px #eb6e76;
    margin-bottom: 5px;
}




















http://caniuse.com/#search=dataset

dataset & data-* attributes

http://caniuse.com/#search=classlist

classList, DOMTokenList

http://caniuse.com/#search=css%203d

CSS3 3D Transforms

http://caniuse.com/#search=css%20transition

CSS3 Transitions

