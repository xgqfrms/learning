#  React  

https://react2.xgqfrms.xyz/



## HTML 标签对比 React 组件

https://react2.xgqfrms.xyz/docs/jsx-in-depth.html



## 属性表达式  

https://react2.xgqfrms.xyz/docs/jsx-in-depth.html


var sideLength = "200px";

var panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);


var pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 


var panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

var owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

var owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);















