var wrap=document.getElementById("wrap");
var arrImg=["img/cube/1.png","img/cube/2.png","img/cube/3.png","img/cube/4.png","img/cube/5.png","img/cube/6.png","img/cube/7.png","img/cube/8.png","img/cube/9.png","img/cube/10.png","img/cube/11.png","img/cube/12.png","img/cube/13.png","img/cube/14.png","img/cube/15.png","img/cube/16.png","img/cube/17.png","img/cube/18.png","img/cube/19.png","img/cube/20.png","img/cube/21.png","img/cube/22.png","img/cube/23.png","img/cube/24.png","img/cube/25.png"];
                 //1       2        3        4          5         6          7        8        9        10         11        12        13       14        15          16       17        18        19       20         21        22        23        24        25        26        27         28       29        30       31                                                                                                                                                                                                     
var arrBgc=["#f44336","#f16393","#a836bc","#8a199d","#673ab7","#3f51b5","#2196f3","#03a9f4","#29c5d9","#009688","#458c48","#57b24e","#8bc34a","#b3bf3c","#cddc39","#ffeb3b","#ffbd06","#ff9700","#fd9700","#885746","#785447","#774635","#607d8b","#3e5b69","#204354","#a1a0a0","#9e9e9e","#858383","#6f6d6d","#575656","#3c3b3b","#303035","#232327"];                                                                                                                                                                                                                                         
var info=document.getElementById("info");
var str="";     //info内容
var timer3;      //生成info的定时器
var mon;     //记录当前是几月
function starMove(obj,start,targetX,targetY,transletZ){ //横向抖动    obj是元素，star是偏移起点，target是目标点,transletZ是目标Z轴位置
    clearInterval(obj.timer);
    obj.deg=start;
    var target=targetX==0?targetY:targetX;
    obj.iSpeed=0;
    obj.timer=setInterval(function () {
        obj.iSpeed+=(target-obj.deg)/5;
        obj.iSpeed*=0.9;
        obj.deg+=obj.iSpeed;
        if(Math.abs(obj.iSpeed)<1&&Math.abs(target-obj.deg)<1){
            obj.style.transform="translateZ("+transletZ+"px) rotateX("+targetX+"deg) rotateY("+targetY+"deg)";
            clearInterval(obj.timer);
        }else{
            if(targetX==0){
                obj.style.transform="translateZ("+transletZ+"px) rotateX("+targetX+"deg) rotateY("+obj.deg+"deg)";
            }else{
                obj.style.transform="translateZ("+transletZ+"px) rotateX("+obj.deg+"deg) rotateY("+0+"deg)";
            }
        }
    },20);
}//float重绘日历，转成absolute布局，记录目标位置然后放到起始位置，然后动画移动到目标位置
function drow(week,monthLength,num){  //week：本月1号是星期几（0.1.2），monthLength：本月有几天（数字）  num是想要第几种演示动画
    wrap.innerHTML="";
    for (var i = 0; i < monthLength; i++) {
        (function(){     //匿名函数自执行，确保每个cube存在单独的函数
            var img=arrImg[Math.floor(Math.random()*arrImg.length)];  //图片随机获取
            var bgc=arrBgc[i];   //背景色随机获取
            var cube=document.createElement("div");
            cube.className="cube";
            cube.onmouseenter=function(e){
                clearInterval(cube.timer2);//进入时清除离开时的timer2
                clearInterval(cube.timer);//进入时清除离开时的timer2
                if(dir=="l"){   //向左
                    cube.setAttribute("dir","x");//记录次立方体本次是从横向进入的，离开时立方体将会横向摇摆
                    this.style.transition=0.2+"s";
                    this.style.transformOrigin="center center -50px";
                    this.style.transform="translateZ(100px) rotateY(180deg) ";
                    cube.timer2=setTimeout(function(){
                        cube.style.transition=0+"s";
                        starMove(cube,160,0,180,100);
                    },200)
                }
                if(dir=="r"){             //向右
                    cube.setAttribute("dir","x");//记录次立方体本次是从横向进入的，离开时立方体将会横向摇摆
                    this.style.transition=0.2+"s";
                    this.style.transformOrigin="center center -50px";
                    this.style.transform="translateZ(100px) rotateY(-180deg)";
                    cube.timer2=setTimeout(function(){
                        cube.style.transition=0+"s";
                        starMove(cube,-160,0,-180,100);
                    },200)
                }
                if(dir=="b"){             //向下
                    cube.setAttribute("dir","y");   //记录次立方体本次是从纵向进入的，离开时立方体将会纵向摇摆
                    this.style.transition=0.2+"s";
                    this.style.transformOrigin="center center -50px";
                    this.style.transform="translateZ(100px) rotateX(-180deg) rotateY(0deg)";
                    cube.timer2=setTimeout(function(){
                        cube.style.transition=0+"s";
                        starMove(cube,-200,-180,0,100);
                    },200)
                }
                if(dir=="t"){             //向上
                    cube.setAttribute("dir","y"); //记录次立方体本次是从纵向进入的，离开时立方体将会纵向摇摆
                    this.style.transition=0.2+"s";
                    this.style.transformOrigin="center center -50px";
                    this.style.transform="translateZ(100px) rotateX(180deg) rotateY(0deg)";
                    cube.timer2=setTimeout(function(){
                        cube.style.transition=0+"s";
                        starMove(cube,200,180,0,100);
                    },200)
                }
                //飞入字体
                clearInterval(timer3);
                if(aData[mon+"-"+this.getElementsByClassName("front_num")[0].innerHTML]){//如果后台有数据
                    info.style.fontFamily="黑体";
                    str=cube.getElementsByClassName("front_num")[0].innerHTML+" "+aData[mon+"-"+this.getElementsByClassName("front_num")[0].innerHTML].hd;
                }else{
                    info.style.fontFamily= "helvetica";
                    str=cube.getElementsByClassName("front_num")[0].innerHTML+"  Hellow world";
                }
                info.innerHTML="";
                var n=-1;
                timer3=setInterval(function(){
                    n++;
                    if(n==str.length-1){
                        clearInterval(timer3);
                    }
                    info.innerHTML+=str[n];
                },40)
            }
            cube.onmouseleave=function(){
                clearInterval(cube.timer2);
                clearInterval(cube.timer);
                cube.style.transition=0.2+"s";
                cube.style.transformOrigin="center center -50px";
                cube.style.transform=" translateZ(0px) rotateY(0deg) rotateX(0deg) ";
                cube.timer2=setTimeout(function(){
                    cube.style.transition=0+"s";
                    if(cube.getAttribute("dir")=="x"){
                        starMove(cube,10,0,0,0);
                    }else if(cube.getAttribute("dir")=="y"){
                        starMove(cube,10,0,0,0);
                    }
                },200)
            }
            cube.onclick=function(){
                if(aData[mon+"-"+this.getElementsByClassName("front_num")[0].innerHTML]){//如果后台有数据打开新页面，否则无法点击
                    window.open("index2.html#"+mon+"-"+this.getElementsByClassName("front_num")[0].innerHTML,"_self");
                }
            }
            if(i==0){
                cube.style.marginLeft=120*week+10+"px";
            }
            var left=document.createElement("div");   //左
            left.style.transform="rotateY(90deg)";
            left.style.transformOrigin="left";
            left.className="cube_side";
            left.style.background="yellow";
            left.style.backgroundImage="url("+img+")";
            left.style.backgroundColor="currentColor";
            left.style.color=bgc;
            left.style.backgroundBlendMode="soft-light";
            cube.appendChild(left);
            
            var right=document.createElement("div");   //右
            right.style.transform="rotateY(-90deg)";
            right.style.transformOrigin="right";
            right.className="cube_side";
            right.style.background="green";
            right.style.backgroundImage="url("+img+")";
            right.style.backgroundColor="currentColor";
            right.style.color=bgc;
            right.style.backgroundBlendMode="soft-light";
            cube.appendChild(right);
            
            var top=document.createElement("div");   //上
            top.style.transform="rotateX(-90deg)";
            top.style.transformOrigin="top";
            top.className="cube_side";
            top.style.background="green";
            top.style.backgroundImage="url("+img+")";
            top.style.backgroundColor="currentColor";
            top.style.color=bgc;
            top.style.backgroundBlendMode="soft-light";
            cube.appendChild(top);
            
            var bottom=document.createElement("div");   //下
            bottom.style.transform="rotateX(90deg)";
            bottom.style.transformOrigin="bottom";
            bottom.className="cube_side";
            bottom.style.background="green";
            bottom.style.backgroundImage="url("+img+")";
            bottom.style.backgroundColor="currentColor";
            bottom.style.color=bgc;
            bottom.style.backgroundBlendMode="soft-light";
            cube.appendChild(bottom);
            
            var front=document.createElement("div");   //前
            front.style.transform="translateZ(0px)";
            front.className="cube_side";
            front.style.backgroundImage="url("+img+")";
            front.style.backgroundColor="currentColor"; //让背景色为color的颜色
            front.style.color=bgc;
            front.style.backgroundBlendMode="soft-light";
            cube.appendChild(front);
            
            var front_num=document.createElement("div"); //前面数字
            front_num.className="front_num";
            front_num.innerHTML=i+1;
            cube.appendChild(front_num);
            
            var fest=document.createElement("span");    //前面节日
            fest.className="fest";
            if(aData[mon+"-"+(i+1)]){//如果后台有数据
                fest.innerHTML=aData[mon+"-"+(i+1)].hd;
            }
            cube.appendChild(fest);
            
            var back=document.createElement("div");   //后
            back.style.transform="translateZ(-100px) rotateY(180deg)";
            back.className="cube_side";
            back.style.background="green";
            back.style.backgroundImage="url("+img+")";
            back.style.backgroundColor="currentColor";
            back.style.color=bgc;
            back.style.backgroundBlendMode="soft-light";
            cube.appendChild(back);
//                      cube.style.visibility="hidden";     //原地隐身
            wrap.appendChild(cube); 
            cube.left=cube.offsetLeft;       //用于浮动布局转换为定位布局
            cube.top=cube.offsetTop;
        })();
    }
    var cubes=document.getElementsByClassName("cube");
    for (var i = 0; i < cubes.length; i++) {
        if(num==1){
            if(cubes[i].left>700){      //第七排
                           //obj  left     top          Z     rx      ry      rz                                             scale
                cartoon(cubes[i], 1500, cubes[i].top,   0,    0,     18000,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.6s" ,  0.3);      //隐身获取到浮动位置之后，开始归位并演示动画
            }else if(cubes[i].left>600){  //第六排
                cartoon(cubes[i], 1500, cubes[i].top,   0,    0,     18000,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.5s" ,  0.3);
            }else if(cubes[i].left>400){   //第五排
                cartoon(cubes[i], 1500, cubes[i].top,   0,    0,     18000,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.4s" ,  0.3);
            }else if(cubes[i].left>300){   //第四排
                cartoon(cubes[i], 1500, cubes[i].top,   0,    0,     18000,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.3s" ,  0.3);
            }else if(cubes[i].left>200){   //第三排
                cartoon(cubes[i], 1500, cubes[i].top,   0,    0,     18000,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.2s" ,  0.3);
            }else if(cubes[i].left>100){   //第二排
                cartoon(cubes[i], 1500, cubes[i].top,   0,    0,     18000,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.1s" ,  0.3);
            }else{                         //第一排
                cartoon(cubes[i], 1500, cubes[i].top,   0,    0,     18000,    0,       "1s cubic-bezier(.73,.22,.28,1) 0s" ,  0.3);
            }
        }
        if(num==2){      //左侧飞入
            if(cubes[i].left>700){      //第一排
                           //obj  left  top    Z     rx      ry      rz                                             scale
                cartoon(cubes[i], -800, 300,   0,    0,     -180,    0,       "1s cubic-bezier(.73,.22,.28,1) 0s" ,  0.3);      //隐身获取到浮动位置之后，开始归位并演示动画
            }else if(cubes[i].left>600){  //第二排
                cartoon(cubes[i], -800, 300,   0,    0,     -180,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.2s" ,  0.3);
            }else if(cubes[i].left>400){   //第三排
                cartoon(cubes[i], -800, 300,   0,    0,     -180,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.4s" ,  0.3);
            }else if(cubes[i].left>300){   //第四排
                cartoon(cubes[i], -800, 300,   0,    0,     -180,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.6s" ,  0.3);
            }else if(cubes[i].left>200){   //第五排
                cartoon(cubes[i], -800, 300,   0,    0,     -180,    0,       "1s cubic-bezier(.73,.22,.28,1) 0.8s" ,  0.3);
            }else if(cubes[i].left>100){   //第六排
                cartoon(cubes[i], -800, 300,   0,    0,     -180,    0,       "1s cubic-bezier(.73,.22,.28,1) 1s" ,  0.3);
            }else{                         //第七排
                cartoon(cubes[i], -800, 300,   0,    0,     -180,    0,       "1s cubic-bezier(.73,.22,.28,1) 1.2s" ,  0.3);
            }
        }
        if(num==3){     //上点散入
            cartoon(cubes[i],     350, -200,     0,  0,  0,  0,       "0.5s cubic-bezier(.73,.22,.28,1) "+Math.random()*1+"s" ,      0);
        }
        if(num==4){
            cartoon(cubes[i],     350, 200,     -500,  0,  0,  900,       "1s cubic-bezier(.73,.22,.28,1) "+Math.random()*1+"s" ,      0);
        }
        if(num==5){
            cartoon(cubes[i], (Math.random()-0.5)*2000, 300,     0,  0,  0,  0,       "1s cubic-bezier(.73,.22,.28,1)"+Math.random()*1+"s",      0);
        }
        if(num==6){
            cartoon(cubes[i], 400, 1000,   0,  Math.random()*1000,  Math.random()*1000,  Math.random()*1000,       "1s cubic-bezier(.73,.22,.28,1)"+Math.random()*1+"s",      0);
        }
        if(num==7){
            cartoon(cubes[i], 400, -600,   0,  Math.random()*1000,  Math.random()*1000,  Math.random()*1000,       "1s cubic-bezier(.73,.22,.28,1)"+Math.random()*1+"s",      0);
        }
    }
}
//跟随鼠标旋转
var originX=document.documentElement.clientWidth/2;
var originY=document.documentElement.clientHeight/2;
//鼠标移动记录位置，判断朝向dri
var lastX=0;   //记录较远的上一次鼠标位置（非紧挨着的上一次）
var lastY=0;
var dir="";     //鼠标移动朝向
var num5=0;    //鼠标移动五次才计算dir
document.onmousemove=function(e){   //ev里面存着所有事件的信息
    //跟随鼠标旋转
    var len=e.clientX-originX;      //鼠标x坐标-原点x坐标   pageX是相对于整个文档流document，clientX是相对于可视区
    var len2=e.clientY-originY;
    var deg=len/150; 
    var deg2=-len2/100;
    wrap.style.transform="translateZ(0px) rotateY("+deg+"deg) rotateX("+deg2+"deg)";
    //鼠标移动记录位置，判断朝向dri
    num5++;
    if(num5%100==1){
        lastX=e.clientX;
        lastY=e.clientY;
    }
    if(Math.abs(e.clientX-lastX)>Math.abs(e.clientY-lastY)){    //横向
        if(e.clientX<lastX){    //向左
            dir="l";
        }else if(e.clientX>lastX){      //向右
            dir="r";
        }
    }else{           //纵向
        if(e.clientY<lastY){    //向上
            dir="t";
        }else if(e.clientY>lastY){      //向下(括号内容防止等于时弹出b)
            dir="b";
        }
    }
}
//当前是几月，点击月份
var months=document.getElementsByClassName("month");
if(!window.location.hash){     //初次进入没有哈希
    window.location.hash="1-1";
}
mon=window.location.hash.slice(1,window.location.hash.indexOf("-"));     //记录当前是几月
for (var i = 0; i < months.length; i++) {
    months[i].index=i+1;
    months[i].onclick=function(){
        mon=this.index;
        window.location.hash=mon+"-1";
        drowmon(this.index);
        for (var j = 0; j < months.length; j++) {
            months[j].className="month";
        }
        this.classList.add("hover");
    }
}
//判断月份
function drowmon(mon){
    months[mon-1].classList.add("hover");
    info.innerHTML="";   //清空info
    if(mon==1){
        wrap.style.marginTop="200px";
        drow(0,31,1);
    }
    if(mon==2){
        wrap.style.marginTop="200px";
        drow(3,28,2);     
    }
    if(mon==3){
        wrap.style.marginTop="200px";
        drow(3,31,3);     
    }
    if(mon==4){
        wrap.style.marginTop="140px";
        drow(6,30,4);
    }
    if(mon==5){
        wrap.style.marginTop="200px";
        drow(1,31,5);
    }
    if(mon==6){
        wrap.style.marginTop="200px";
        drow(4,30,6);
    }
    if(mon==7){
        wrap.style.marginTop="140px";
        drow(6,31,7);
    }
    if(mon==8){
        wrap.style.marginTop="200px";
        drow(2,31,8);
    }
    if(mon==9){
        wrap.style.marginTop="200px";
        drow(5,30,9);
    }
    if(mon==10){
        wrap.style.marginTop="200px";
        drow(0,31,10);
    }
    if(mon==11){
        wrap.style.marginTop="200px";
        drow(3,30,11);
    }
    if(mon==12){
        wrap.style.marginTop="140px";
        drow(5,31,12);
    }
}
function cartoon(obj,L,T,Z,Xdeg,Ydeg,Zdeg,transition,scale,opacity){//封装好的单个cube动画位置初始化    obj是单个cube，以下皆为初始状态,L是left，T是top，Z是translateZ，Xdeg是rotateX，Ydeg是rotateY，scale是缩放大小,onoff先平移还是先旋转，true代表先平移
    obj.style.position="absolute";
    obj.style.marginLeft="";
    obj.style.transition=0+"s";    
    obj.style.left=L+"px";
    obj.style.top=T+"px";
    obj.style.transformOrigin="center center -50px";
    obj.style.transform="rotateX("+Xdeg+"deg) rotateY("+Ydeg+"deg) rotateZ("+Zdeg+"deg) translateZ("+Z+"px) scale("+scale+")";
    obj.style.opacity=opacity;
    setTimeout(function(){
        obj.style.transition=transition;
        obj.style.opacity=1;
        obj.style.left=obj.left+"px";
        obj.style.top=obj.top+"px";
        obj.style.transformOrigin="center center -50px";       //否则先旋转
        obj.style.transform="rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) scale(1)";
    },0)
}

drowmon(mon);
