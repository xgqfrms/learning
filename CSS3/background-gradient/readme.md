#  background & gradient  


https://www.w3.org/TR/css3-background/

CSS Backgrounds and Borders Module Level 3

W3C Candidate Recommendation 9 September 2014



## Box model  


http://www.w3.org/TR/CSS21/box.html
https://www.w3.org/TR/CSS22/box.html


https://www.w3.org/TR/CSS2/colors.html




## CSS3 Gradients  

http://www.w3schools.com/css/css3_gradients.asp

https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient

https://css-tricks.com/css3-gradients/

http://www.cssmatic.com/gradient-generator
http://www.colorzilla.com/gradient-editor/
http://learn.shayhowe.com/html-css/setting-backgrounds-and-gradients/

https://webkit.org/blog/1424/css3-gradients/






##


http://lea.verou.me/

https://uist.acm.org/uist2017/


http://lea.verou.me/css3patterns/#

http://lea.verou.me/css3patterns/#carbon-fibre


https://github.com/LeaVerou/css3patterns

https://github.com/LeaVerou/animatable/

http://leaverou.github.io/animatable/


body > header {
    padding: 1em 1.5em 1.8em;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(../images/header.jpg) top/cover #4d91b3;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(../images/header.jpg);
    background-position-x: initial, center;
    background-position-y: initial, top;
    background-size: initial, cover;
    background-repeat-x: initial, initial;
    background-repeat-y: initial, initial;
    background-attachment: initial, initial;
    background-origin: initial, initial;
    background-clip: initial, initial;
    background-color: rgb(77, 145, 179);
    color: white;
    text-align: center;
    font-size: 120%;
    text-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
}





body > header p time::before {
    content: "📅";
}
body > header p .place::before, body > header p time::before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: 100%/1 "UIST2017 Icons", emoji;
    color: #ff2b00;
    margin-right: .4rem;
}


body > header p .place::before {
    content: "📍";
}


🐦
📽
📷
🐱
f

body > header p .place::before, body > header p time::before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: 100%/1 "UIST2017 Icons", emoji;
    color: #ff2b00;
    margin-right: .4rem;
}

body > header p .place::before, body > header p time::before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: 100%/1 "UIST2017 Icons", emoji;
    color: #ff2b00;
    margin-right: .4rem; 
}

body > header p .place::before {
    content: "📍";
}

body > header p time {
    font-weight: bold;
    font-size: 105%; 
}

body > header p time::before {
    content: "📅";
}






