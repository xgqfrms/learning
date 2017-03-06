var move = (function(){
    var moveFn = {
        Tween: {
            linear: function (t, b, c, d){
                return c*t/d + b;
            },
            easeIn: function(t, b, c, d){
                return c*(t/=d)*t + b;
            },
            easeOut: function(t, b, c, d){
                return -c *(t/=d)*(t-2) + b;
            },
            easeBoth: function(t, b, c, d){
                if ((t/=d/2) < 1) {
                    return c/2*t*t + b;
                }
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInStrong: function(t, b, c, d){
                return c*(t/=d)*t*t*t + b;
            },
            easeOutStrong: function(t, b, c, d){
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeBothStrong: function(t, b, c, d){
                if ((t/=d/2) < 1) {
                    return c/2*t*t*t*t + b;
                }
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            elasticIn: function(t, b, c, d, a, p){
                if (t === 0) { 
                    return b; 
                }
                if ( (t /= d) == 1 ) {
                    return b+c; 
                }
                if (!p) {
                    p=d*0.3; 
                }
                if (!a || a < Math.abs(c)) {
                    a = c; 
                    var s = p/4;
                } else {
                    var s = p/(2*Math.PI) * Math.asin (c/a);
                }
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            elasticOut: function(t, b, c, d, a, p){
                if (t === 0) {
                    return b;
                }
                if ( (t /= d) == 1 ) {
                    return b+c;
                }
                if (!p) {
                    p=d*0.3;
                }
                if (!a || a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else {
                    var s = p/(2*Math.PI) * Math.asin (c/a);
                }
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },    
            elasticBoth: function(t, b, c, d, a, p){
                if (t === 0) {
                    return b;
                }
                if ( (t /= d/2) == 2 ) {
                    return b+c;
                }
                if (!p) {
                    p = d*(0.3*1.5);
                }
                if ( !a || a < Math.abs(c) ) {
                    a = c; 
                    var s = p/4;
                }
                else {
                    var s = p/(2*Math.PI) * Math.asin (c/a);
                }
                if (t < 1) {
                    return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
                            Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                }
                return a*Math.pow(2,-10*(t-=1)) * 
                        Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
            },
            backIn: function(t, b, c, d, s){
                if (typeof s == 'undefined') {
                   s = 1.70158;
                }
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            backOut: function(t, b, c, d, s){
                if (typeof s == 'undefined') {
                    s = 2.70158;  //回缩的距离
                }
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            }, 
            backBoth: function(t, b, c, d, s){
                if (typeof s == 'undefined') {
                    s = 1.70158; 
                }
                if ((t /= d/2 ) < 1) {
                    return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                }
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            bounceIn: function(t, b, c, d){
                return c - Tween['bounceOut'](d-t, 0, c, d) + b;
            },       
            bounceOut: function(t, b, c, d){
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
                }
                return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
            },      
            bounceBoth: function(t, b, c, d){
                if (t < d/2) {
                    return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
                }
                return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
            }
        },
        cssTransfrom: function (obj,attr,val) {
            var value = '';
            if ( typeof(obj.transform) == 'undefined' ) {
                obj.transform = {};
            }
            
            if ( arguments.length == 2 ) {
                if ( typeof(obj.transform[attr]) == 'undefined' ) {
                    switch (attr) {
                        case 'scale':
                        case 'scaleX':
                        case 'scaleY':
                            obj.transform[attr] = 1;
                            break;
                        default:
                            obj.transform[attr] = 0;
                            break;
                    }
                }
                return obj.transform[attr];
            }else{
                obj.transform[attr] = val;
                
                for ( var s in obj.transform ) {
                    switch (s) {
                        case 'rotate':
                        case 'rotateX':
                        case 'rotateY':
                        case 'rotateZ':
                        case 'skew':
                        case 'skewX':
                        case 'skewY':
                            value += ` ${s}(${obj.transform[s]}deg)`;
                            break;
                        case 'translate':
                        case 'translateX':
                        case 'translateY':
                        case 'translateZ':
                            value += ` ${s}(${obj.transform[s]}px)`;
                            break;
                        default:
                            value += ` ${s}(${obj.transform[s]})`;
                            break;
                    }
                }
            }
            obj.style.transform = value;
        },
        css: function (obj,attr,val) {
            var trArr = ['rotate','rotateX','rotateY','rotateZ','scale','scaleX','scaleY','skew','skewX','skewY','translate','translateX','translateY','translateZ'];
            if ( trArr.indexOf(attr) != -1 ){
                if ( arguments.length === 2 ){
                    
                    return moveFn.cssTransfrom(obj,attr);
                } else {
                    moveFn.cssTransfrom(obj,attr,val);
                }
            }
            if ( arguments.length < 3 ) {
                val = obj.currentStyle? obj.currentStyle[attr]: getComputedStyle(obj)[attr];
                if ( attr == 'opacity' ) {
                    val *= 100;
                }
                return parseFloat(val);
                
            } else {
                if ( attr == 'opacity' ) {
                    obj.style[attr] = val/100;
                    obj.style.filter = 'alpha(opacity = '+val+')';
                } else {
                    obj.style[attr] = val + 'px';
                }
                
            }
        },
        mTween: function (obj,attr,times,type,callBack){
            if (obj.mTweenOnOff) return;
            obj.mTweenOnOff = true;
            var t = 0;//当前步数
            var b = {};//元素移动的初始位置
            var c = {};//初始位置和当前位置的差值
            var d = times/20;//元素移动的总步数
            for ( var s in attr ) {
                b[s] = moveFn.css(obj,s);
                c[s] = attr[s] - b[s];
                
            } 
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                t ++;
                if ( t > d ) {
                    for ( var s in attr ) {
                        moveFn.css(obj,s,attr[s]);
                    }
                    clearInterval(obj.timer);
                    obj.mTweenOnOff = false;
                    setTimeout(
                        function () {
                            callBack&&callBack();
                        },20
                    );
                } else {
                    var val = 0;
                    for ( var s in attr ) {
                        val = moveFn.Tween[type](t,b[s],c[s],d);
                        
                         moveFn.css(obj,s,val);
                    }
                }
            },20);
        },
        shake: function (obj,attr,times,callBack) {
            if ( obj.shake ) {
                return;
            }
            var num = 0;
            var arr = [];
            for ( var i= times - 1; i>=0; i-- ) {
                i%2 == 0? arr.push(i): arr.push(-i);
            }
            var oldCss = moveFn.css(obj,attr);
            clearInterval(obj.shake);
            obj.shake = setInterval(
                function () {
                    if ( num > times - 1 ) {
                        clearInterval(obj.shake);
                        setTimeout(
                            function () {
                                callBack&&callBack();
                                obj.shake = 0;
                            },20
                        );
                        
                    } else {
                        moveFn.css(obj,attr,oldCss+arr[num]);
                        num ++;
                    }
                },20
            );
        },
        //拖拽函数参数中只穿obj1 /拖拽并碰撞  参数：obj1=移动的元素，obj2=被碰撞的元素， trueFn:没碰到时执行的函数， falseFn:碰到时执行的函数
        drag: function (json){
            var settings = {
                obj1:json.obj1,
                obj2:json.obj2,
                trueFn:json.trueFn,
                falseFn:json.falseFn
            };
            settings.obj1.addEventListener('mousedown',fnDown);
            function fnDown(ev){
                var ev = ev || event;
                var disX = ev.pageX - this.offsetLeft,
                    disY = ev.pageY - this.offsetTop;
                document.addEventListener('mousemove',dMove);
                function dMove(ev) {
                    var ev = ev || event;
                    var l = ev.pageX - disX,
                        t = ev.pageY - disY;
                        if ( settings.obj2 || settings.obj2.nodeType === 1){
                            if ( typeof settings.trueFn == 'function' && moveFn.collision(settings.obj1,settings.obj2) ) {
                                settings.trueFn(settings.obj2,settings.obj1);
                            } else if (typeof settings.falseFn == 'function' && !moveFn.collision(settings.obj1,settings.obj2)) {
                                settings.falseFn(settings.obj2,settings.obj1);
                            }
                        }
                        
                    settings.obj1.style.left = l + 'px';
                    settings.obj1.style.top = t + 'px';
                }
                document.addEventListener('mouseup',fnUp);
                function fnUp() {
                    document.removeEventListener('mousemove',dMove);
                    document.removeEventListener('mouseup',fnUp);
                }
                ev.preventDefault();
            }
            
        },
        //碰撞检测函数   参数: obj1=移动的元素   obj2=被碰撞的元素，返回值：没碰到返回true，碰到返回false；
        collision: function (obj1,obj2) {
            var l1 = obj1.offsetLeft,
                t1 = obj1.offsetTop,
                r1 = l1 + obj1.offsetWidth,
                b1 = t1 + obj1.offsetHeight;
            
            var l2 = obj2.offsetLeft,
                t2 = obj2.offsetTop,
                r2 = l2 + obj2.offsetWidth,
                b2 = t2 + obj2.offsetHeight;
            if ( r1<l2 || b1 < t2 || l1 > r2 || t1 > b2 ) {
                return false;
            } else {
                return true;
            }
        },
        //鼠标滚动函数，
        myWheel: function (obj,callBack) {
                
            obj.addEventListener('DOMMouseScroll',fnScorll);
            obj.addEventListener('mousewheel',fnScorll);
            function fnScorll(ev) {
                var ev = ev || event;
                var down = true;
                if (ev.wheelDelta) {
                    down = ev.wheelDelta > 0? true: false;
                } else {
                    down = ev.detail < 0? true: false;
                }
                if ( callBack && typeof callBack === 'function' ) {
                    callBack(down);
                }
                ev.preventDefault();
            }
        }
    }
    return moveFn;
}())
