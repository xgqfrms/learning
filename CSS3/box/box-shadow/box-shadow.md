# CSS3 box-shadow 


http://www.cssmatic.com/box-shadow  

http://css3gen.com/box-shadow/  

http://www.w3schools.com/cssref/css3_pr_box-shadow.asp  

https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow  


```codes
boxShadow = "none|h-shadow v-shadow blur spread color |inset|initial|inherit"
坐标： 左上角(0,0) 模糊度 延展度(方向四周 ) 颜色 方式(内部，初始值，继承)

两组 box-shadow: 30px -10px 20px 0 #0cea15, -30px 10px 20px 0 rgba(0,0,0,0.19);
实现两边对称阴影效果 (Material Design)

两组 box-shadow: 0px 12px 16px 0 rgba(0,0,0,0.2), 0px 10px 20px 0 #9509ad;
实现叠加阴影效果 (外大浅色，内小深色)

一组 box-shadow: 0px 0px 7px 10px rgba(255,0,255,0.5);
实现四边对称阴影效果 (0,0 blur spread)

``` 

##  pretty fancy 3D looking box shadows  

/* boxShadow ? transform: rotate(-90deg); + .effect2::before, .effect2:::after*/

https://css-tricks.com/almanac/properties/b/box-shadow/  
https://css-tricks.com/snippets/css/css-box-shadow/  



