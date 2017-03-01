// arguments.callee



setTimeout(function(){
    //取出下一个条目并处理
    var item = array.shift();
    process(item);
    //若还有条目，再设置另一个定时器
    if(array.length > 0){
        setTimeout(arguments.callee, 100);
    }
}, 100);
















